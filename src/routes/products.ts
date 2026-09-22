import type { FastifyPluginAsync } from 'fastify';

import type { Prisma } from '../generated/prisma/client.js';

import { prisma } from '../prisma.js';
import { mapProductImages } from '../utils/productResponse.js';

interface ProductParams {
	slug: string;
}

interface ProductQuery {
	gender?: string;
	category?: string;
	color?: string;
	size?: string;
	search?: string;

	sort?: 'newest' | 'oldest' | 'price-asc' | 'price-desc' | 'name-asc';

	page?: string;
	limit?: string;
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
			search,
			sort = 'newest',
			page = '1',
			limit = '12',
		} = request.query;

		const currentPage = Math.max(Number(page) || 1, 1);

		const itemsPerPage = Math.min(Math.max(Number(limit) || 12, 1), 50);

		const where: Prisma.ProductWhereInput = {
			...(gender && {
				gender,
			}),

			...(category && {
				category: {
					slug: category,
				},
			}),

			...(search && {
				name: {
					contains: search,
				},
			}),

			...((color || size) && {
				variants: {
					some: {
						...(color && {
							color,
						}),

						...(size && {
							size,
						}),

						stock: {
							gt: 0,
						},
					},
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
		const [categories, products, variants] = await Promise.all([
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
