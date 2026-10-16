import type { FastifyPluginAsync } from 'fastify';

import type { Prisma } from '../generated/prisma/client.js';

import { prisma } from '../prisma.js';
import { mapProductImages } from '../utils/productResponse.js';

interface ProductParams {
	slug: string;
}

interface ProductQuery {
	gender?: string;

	category?: string | string[];
	color?: string | string[];
	size?: string | string[];

	minPrice?: string;
	maxPrice?: string;

	search?: string;

	sort?: 'newest' | 'oldest' | 'price-asc' | 'price-desc' | 'name-asc';

	page?: string;
	limit?: string;
}

function normalizeArray(value?: string | string[]): string[] {
	if (!value) {
		return [];
	}

	return Array.isArray(value) ? value : [value];
}

function normalizeNumber(value?: string): number | undefined {
	if (value === undefined) {
		return undefined;
	}

	const parsed = Number(value);

	return Number.isFinite(parsed) ? parsed : undefined;
}

export const productsRoutes: FastifyPluginAsync = async (app) => {
	app.get<{
		Querystring: ProductQuery;
	}>('/products', async (request) => {
		const {
			gender,
			category,
			color,
			size,
			minPrice,
			maxPrice,
			search,
			sort = 'newest',
			page = '1',
			limit = '12',
		} = request.query;

		const currentPage = Math.max(Number(page) || 1, 1);

		const itemsPerPage = Math.min(Math.max(Number(limit) || 12, 1), 50);

		const categories = normalizeArray(category);
		const colors = normalizeArray(color);
		const sizes = normalizeArray(size);

		const minimumPrice = normalizeNumber(minPrice);
		const maximumPrice = normalizeNumber(maxPrice);

		const where: Prisma.ProductWhereInput = {
			...(gender && {
				gender,
			}),

			...(categories.length > 0 && {
				category: {
					slug: {
						in: categories,
					},
				},
			}),

			...((colors.length > 0 || sizes.length > 0) && {
				variants: {
					some: {
						...(colors.length > 0 && {
							color: {
								in: colors,
							},
						}),

						...(sizes.length > 0 && {
							size: {
								in: sizes,
							},
						}),
					},
				},
			}),

			...((minimumPrice !== undefined || maximumPrice !== undefined) && {
				priceInCents: {
					...(minimumPrice !== undefined && {
						gte: minimumPrice,
					}),

					...(maximumPrice !== undefined && {
						lte: maximumPrice,
					}),
				},
			}),

			...(search && {
				name: {
					contains: search,
				},
			}),
		};

		let orderBy: Prisma.ProductOrderByWithRelationInput = {
			createdAt: 'desc',
		};

		switch (sort) {
			case 'oldest':
				orderBy = {
					createdAt: 'asc',
				};
				break;

			case 'price-asc':
				orderBy = {
					priceInCents: 'asc',
				};
				break;

			case 'price-desc':
				orderBy = {
					priceInCents: 'desc',
				};
				break;

			case 'name-asc':
				orderBy = {
					name: 'asc',
				};
				break;
		}

		const skip = (currentPage - 1) * itemsPerPage;

		const [products, total] = await Promise.all([
			prisma.product.findMany({
				where,

				include: {
					category: true,

					images: {
						orderBy: {
							position: 'asc',
						},
					},

					variants: true,
				},

				orderBy,

				skip,
				take: itemsPerPage,
			}),

			prisma.product.count({
				where,
			}),
		]);

		const totalPages = Math.ceil(total / itemsPerPage);

		return {
			data: products.map((product) => ({
				...product,

				images: mapProductImages(product.images),
			})),

			pagination: {
				page: currentPage,
				limit: itemsPerPage,
				total,
				totalPages,
			},
		};
	});

	app.get('/products/filters', async () => {
		const [categories, products, variants, priceRange] = await Promise.all([
			prisma.category.findMany({
				select: {
					name: true,
					slug: true,
				},

				orderBy: {
					name: 'asc',
				},
			}),

			prisma.product.findMany({
				select: {
					gender: true,
				},
			}),

			prisma.productVariant.findMany({
				select: {
					color: true,
					size: true,
				},
			}),

			prisma.product.aggregate({
				_min: {
					priceInCents: true,
				},

				_max: {
					priceInCents: true,
				},
			}),
		]);

		const genders = [
			...new Set(products.map((product) => product.gender)),
		].sort();

		const colors = [
			...new Set(variants.map((variant) => variant.color)),
		].sort();

		const sizes = [...new Set(variants.map((variant) => variant.size))];

		return {
			categories,
			genders,
			colors,
			sizes,

			price: {
				min: priceRange._min.priceInCents ?? 0,
				max: priceRange._max.priceInCents ?? 0,
			},
		};
	});

	app.get<{
		Params: ProductParams;
	}>('/products/:slug', async (request, reply) => {
		const { slug } = request.params;

		const product = await prisma.product.findUnique({
			where: {
				slug,
			},

			include: {
				category: true,

				images: {
					orderBy: {
						position: 'asc',
					},
				},

				variants: true,
			},
		});

		if (!product) {
			return reply.status(404).send({
				message: 'Product not found',
			});
		}

		return {
			...product,

			images: mapProductImages(product.images),
		};
	});
};
