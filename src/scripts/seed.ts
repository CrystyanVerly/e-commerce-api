import { prisma } from '../prisma.js';

async function main() {
	await prisma.productVariant.deleteMany();
	await prisma.product.deleteMany();
	await prisma.category.deleteMany();

	const tShirts = await prisma.category.create({
		data: {
			name: 'T-Shirts',
			slug: 't-shirts',
		},
	});

	const hoodies = await prisma.category.create({
		data: {
			name: 'Hoodies',
			slug: 'hoodies',
		},
	});

	const jackets = await prisma.category.create({
		data: {
			name: 'Jackets',
			slug: 'jackets',
		},
	});

	await prisma.product.create({
		data: {
			name: 'Raw Black T-Shirt',
			slug: 'raw-black-t-shirt',
			description: 'Essential black t-shirt for everyday wear.',
			priceInCents: 7990,
			imageUrl: '/products/raw-black-t-shirt.webp',
			gender: 'male',
			categoryId: tShirts.id,

			variants: {
				create: [
					{
						sku: 'RBT-BLK-S',
						color: 'black',
						size: 'S',
						stock: 4,
					},
					{
						sku: 'RBT-BLK-M',
						color: 'black',
						size: 'M',
						stock: 7,
					},
					{
						sku: 'RBT-BLK-L',
						color: 'black',
						size: 'L',
						stock: 2,
					},
				],
			},
		},
	});

	await prisma.product.create({
		data: {
			name: 'Classic White T-Shirt',
			slug: 'classic-white-t-shirt',
			description: 'Clean and versatile white t-shirt.',
			priceInCents: 6990,
			imageUrl: '/products/classic-white-t-shirt.webp',
			gender: 'female',
			categoryId: tShirts.id,

			variants: {
				create: [
					{
						sku: 'CWT-WHT-S',
						color: 'white',
						size: 'S',
						stock: 8,
					},
					{
						sku: 'CWT-WHT-M',
						color: 'white',
						size: 'M',
						stock: 3,
					},
					{
						sku: 'CWT-WHT-L',
						color: 'white',
						size: 'L',
						stock: 0,
					},
				],
			},
		},
	});

	await prisma.product.create({
		data: {
			name: 'Essential Hoodie',
			slug: 'essential-hoodie',
			description: 'Comfortable hoodie designed for everyday use.',
			priceInCents: 14990,
			imageUrl: '/products/essential-hoodie.webp',
			gender: 'unisex',
			categoryId: hoodies.id,

			variants: {
				create: [
					{
						sku: 'EHD-GRY-S',
						color: 'gray',
						size: 'S',
						stock: 5,
					},
					{
						sku: 'EHD-GRY-M',
						color: 'gray',
						size: 'M',
						stock: 9,
					},
					{
						sku: 'EHD-GRY-L',
						color: 'gray',
						size: 'L',
						stock: 4,
					},
					{
						sku: 'EHD-BLK-S',
						color: 'black',
						size: 'S',
						stock: 2,
					},
					{
						sku: 'EHD-BLK-M',
						color: 'black',
						size: 'M',
						stock: 6,
					},
					{
						sku: 'EHD-BLK-L',
						color: 'black',
						size: 'L',
						stock: 0,
					},
				],
			},
		},
	});

	await prisma.product.create({
		data: {
			name: 'Relaxed Fit Jacket',
			slug: 'relaxed-fit-jacket',
			description: 'Lightweight jacket with a relaxed silhouette.',
			priceInCents: 21990,
			imageUrl: '/products/relaxed-fit-jacket.webp',
			gender: 'female',
			categoryId: jackets.id,

			variants: {
				create: [
					{
						sku: 'RFJ-BGE-S',
						color: 'beige',
						size: 'S',
						stock: 3,
					},
					{
						sku: 'RFJ-BGE-M',
						color: 'beige',
						size: 'M',
						stock: 2,
					},
					{
						sku: 'RFJ-BGE-L',
						color: 'beige',
						size: 'L',
						stock: 1,
					},
				],
			},
		},
	});

	console.log('Seed completed.');
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
