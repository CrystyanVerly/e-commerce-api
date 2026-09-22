import { prisma } from '../prisma.js';

async function main() {
	const category = await prisma.category.findUnique({
		where: {
			slug: 't-shirts',
		},
	});

	if (!category) {
		throw new Error('Category not found');
	}

	const product = await prisma.product.create({
		data: {
			name: 'Basic Blue T-Shirt',
			slug: 'basic-blue-t-shirt',
			description: 'Basic blue t-shirt for everyday wear.',
			priceInCents: 7490,
			imageUrl: '/products/basic-blue-t-shirt.webp',
			gender: 'male',

			categoryId: category.id,

			variants: {
				create: [
					{
						sku: 'BBT-BLU-S',
						color: 'blue',
						size: 'S',
						stock: 5,
					},
					{
						sku: 'BBT-BLU-M',
						color: 'blue',
						size: 'M',
						stock: 8,
					},
					{
						sku: 'BBT-BLU-L',
						color: 'blue',
						size: 'L',
						stock: 3,
					},
				],
			},
		},
		include: {
			category: true,
			variants: true,
		},
	});

	console.log(product);
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
