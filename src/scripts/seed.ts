import { prisma } from '../prisma.js';

const categories = [
	{
		name: 'T-Shirts',
		slug: 't-shirts',
	},
	{
		name: 'Hoodies',
		slug: 'hoodies',
	},
	{
		name: 'Jackets',
		slug: 'jackets',
	},
	{
		name: 'Pants',
		slug: 'pants',
	},
	{
		name: 'Sweatshirts',
		slug: 'sweatshirts',
	},
];

function getProductImageUrl(slug: string, position: number) {
	return `/images/products/${slug}/${slug}-${position + 1}.webp`;
}

const products = [
	{
		name: 'Raw Black T-Shirt',
		slug: 'raw-black-t-shirt',
		description:
			'Essential black t-shirt with a clean silhouette for everyday wear.',
		priceInCents: 7990,
		gender: 'male',
		category: 't-shirts',

		images: [
			{
				alt: 'Raw Black T-Shirt front view',
			},
			{
				alt: 'Raw Black T-Shirt back view',
			},
		],

		variants: [
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
			{
				sku: 'RBT-BLK-XL',
				color: 'black',
				size: 'XL',
				stock: 1,
			},
		],
	},

	{
		name: 'Classic White T-Shirt',
		slug: 'classic-white-t-shirt',
		description: 'Minimal white t-shirt made for versatile everyday styling.',
		priceInCents: 6990,
		gender: 'female',
		category: 't-shirts',

		images: [
			{
				alt: 'Classic White T-Shirt front view',
			},
			{
				alt: 'Classic White T-Shirt back view',
			},
		],

		variants: [
			{
				sku: 'CWT-WHT-XS',
				color: 'white',
				size: 'XS',
				stock: 5,
			},
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

	{
		name: 'Oversized Stone T-Shirt',
		slug: 'oversized-stone-t-shirt',
		description: 'Relaxed oversized t-shirt with a soft stone-colored finish.',
		priceInCents: 8990,
		gender: 'unisex',
		category: 't-shirts',

		images: [
			{
				alt: 'Oversized Stone T-Shirt front view',
			},
			{
				alt: 'Oversized Stone T-Shirt back view',
			},
		],

		variants: [
			{
				sku: 'OST-BGE-S',
				color: 'beige',
				size: 'S',
				stock: 6,
			},
			{
				sku: 'OST-BGE-M',
				color: 'beige',
				size: 'M',
				stock: 10,
			},
			{
				sku: 'OST-BGE-L',
				color: 'beige',
				size: 'L',
				stock: 5,
			},
		],
	},

	{
		name: 'Essential Blue T-Shirt',
		slug: 'essential-blue-t-shirt',
		description: 'Everyday cotton t-shirt in a versatile deep blue tone.',
		priceInCents: 7490,
		gender: 'male',
		category: 't-shirts',

		images: [
			{
				alt: 'Essential Blue T-Shirt front view',
			},
			{
				alt: 'Essential Blue T-Shirt back view',
			},
		],

		variants: [
			{
				sku: 'EBT-BLU-S',
				color: 'blue',
				size: 'S',
				stock: 3,
			},
			{
				sku: 'EBT-BLU-M',
				color: 'blue',
				size: 'M',
				stock: 8,
			},
			{
				sku: 'EBT-BLU-L',
				color: 'blue',
				size: 'L',
				stock: 4,
			},
			{
				sku: 'EBT-BLU-XL',
				color: 'blue',
				size: 'XL',
				stock: 2,
			},
		],
	},

	{
		name: 'Charcoal Gray T-Shirt',
		slug: 'charcoal-gray-t-shirt',
		description: 'Soft heathered t-shirt in a versatile charcoal gray tone.',
		priceInCents: 7290,
		gender: 'female',
		category: 't-shirts',

		images: [
			{
				alt: 'Charcoal Gray T-Shirt front view',
			},
			{
				alt: 'Charcoal Gray T-Shirt back view',
			},
		],

		variants: [
			{
				sku: 'CGT-GRY-XS',
				color: 'gray',
				size: 'XS',
				stock: 4,
			},
			{
				sku: 'CGT-GRY-S',
				color: 'gray',
				size: 'S',
				stock: 9,
			},
			{
				sku: 'CGT-GRY-M',
				color: 'gray',
				size: 'M',
				stock: 0,
			},
			{
				sku: 'CGT-GRY-L',
				color: 'gray',
				size: 'L',
				stock: 2,
			},
		],
	},

	{
		name: 'Forest Green T-Shirt',
		slug: 'forest-green-t-shirt',
		description: 'Everyday t-shirt in a deep forest green shade.',
		priceInCents: 7890,
		gender: 'unisex',
		category: 't-shirts',

		images: [
			{
				alt: 'Forest Green T-Shirt front view',
			},
			{
				alt: 'Forest Green T-Shirt back view',
			},
		],

		variants: [
			{
				sku: 'FGT-GRN-S',
				color: 'green',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'FGT-GRN-M',
				color: 'green',
				size: 'M',
				stock: 8,
			},
			{
				sku: 'FGT-GRN-L',
				color: 'green',
				size: 'L',
				stock: 3,
			},
			{
				sku: 'FGT-GRN-XL',
				color: 'green',
				size: 'XL',
				stock: 0,
			},
		],
	},

	{
		name: 'Ivory Ribbed T-Shirt',
		slug: 'ivory-ribbed-t-shirt',
		description: 'Ribbed knit t-shirt in a clean ivory white finish.',
		priceInCents: 8290,
		gender: 'male',
		category: 't-shirts',

		images: [
			{
				alt: 'Ivory Ribbed T-Shirt front view',
			},
			{
				alt: 'Ivory Ribbed T-Shirt back view',
			},
		],

		variants: [
			{
				sku: 'IRT-WHT-S',
				color: 'white',
				size: 'S',
				stock: 2,
			},
			{
				sku: 'IRT-WHT-M',
				color: 'white',
				size: 'M',
				stock: 6,
			},
			{
				sku: 'IRT-WHT-L',
				color: 'white',
				size: 'L',
				stock: 9,
			},
		],
	},

	{
		name: 'Sage Green Oversized T-Shirt',
		slug: 'sage-green-oversized-t-shirt',
		description:
			'Oversized t-shirt with a relaxed drop shoulder in sage green.',
		priceInCents: 8490,
		gender: 'female',
		category: 't-shirts',

		images: [
			{
				alt: 'Sage Green Oversized T-Shirt front view',
			},
			{
				alt: 'Sage Green Oversized T-Shirt back view',
			},
		],

		variants: [
			{
				sku: 'SGT-GRN-XS',
				color: 'green',
				size: 'XS',
				stock: 3,
			},
			{
				sku: 'SGT-GRN-S',
				color: 'green',
				size: 'S',
				stock: 7,
			},
			{
				sku: 'SGT-GRN-M',
				color: 'green',
				size: 'M',
				stock: 1,
			},
			{
				sku: 'SGT-GRN-L',
				color: 'green',
				size: 'L',
				stock: 0,
			},
		],
	},

	{
		name: 'Slate Gray Muscle T-Shirt',
		slug: 'slate-gray-muscle-t-shirt',
		description: 'Fitted muscle-cut t-shirt in a cool slate gray.',
		priceInCents: 6990,
		gender: 'male',
		category: 't-shirts',

		images: [
			{
				alt: 'Slate Gray Muscle T-Shirt front view',
			},
			{
				alt: 'Slate Gray Muscle T-Shirt back view',
			},
		],

		variants: [
			{
				sku: 'SMT-GRY-S',
				color: 'gray',
				size: 'S',
				stock: 4,
			},
			{
				sku: 'SMT-GRY-M',
				color: 'gray',
				size: 'M',
				stock: 10,
			},
			{
				sku: 'SMT-GRY-L',
				color: 'gray',
				size: 'L',
				stock: 5,
			},
			{
				sku: 'SMT-GRY-XL',
				color: 'gray',
				size: 'XL',
				stock: 1,
			},
		],
	},

	{
		name: 'Essential Hoodie',
		slug: 'essential-hoodie',
		description: 'Soft everyday hoodie with a relaxed fit and minimal design.',
		priceInCents: 14990,
		gender: 'unisex',
		category: 'hoodies',

		images: [
			{
				alt: 'Essential Hoodie front view',
			},
			{
				alt: 'Essential Hoodie back view',
			},
		],

		variants: [
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

	{
		name: 'Forest Green Hoodie',
		slug: 'forest-green-hoodie',
		description: 'Heavyweight hoodie finished in a muted forest green.',
		priceInCents: 15990,
		gender: 'male',
		category: 'hoodies',

		images: [
			{
				alt: 'Forest Green Hoodie front view',
			},
			{
				alt: 'Forest Green Hoodie back view',
			},
		],

		variants: [
			{
				sku: 'FGH-GRN-S',
				color: 'green',
				size: 'S',
				stock: 4,
			},
			{
				sku: 'FGH-GRN-M',
				color: 'green',
				size: 'M',
				stock: 7,
			},
			{
				sku: 'FGH-GRN-L',
				color: 'green',
				size: 'L',
				stock: 3,
			},
		],
	},

	{
		name: 'Cream Cropped Hoodie',
		slug: 'cream-cropped-hoodie',
		description:
			'Cropped hoodie with a soft brushed interior and relaxed shape.',
		priceInCents: 13990,
		gender: 'female',
		category: 'hoodies',

		images: [
			{
				alt: 'Cream Cropped Hoodie front view',
			},
			{
				alt: 'Cream Cropped Hoodie back view',
			},
		],

		variants: [
			{
				sku: 'CCH-BGE-XS',
				color: 'beige',
				size: 'XS',
				stock: 3,
			},
			{
				sku: 'CCH-BGE-S',
				color: 'beige',
				size: 'S',
				stock: 6,
			},
			{
				sku: 'CCH-BGE-M',
				color: 'beige',
				size: 'M',
				stock: 2,
			},
		],
	},

	{
		name: 'Navy Pullover Hoodie',
		slug: 'navy-pullover-hoodie',
		description: 'Classic pullover hoodie in a deep navy blue.',
		priceInCents: 15490,
		gender: 'male',
		category: 'hoodies',

		images: [
			{
				alt: 'Navy Pullover Hoodie front view',
			},
			{
				alt: 'Navy Pullover Hoodie back view',
			},
		],

		variants: [
			{
				sku: 'NPH-BLU-S',
				color: 'blue',
				size: 'S',
				stock: 3,
			},
			{
				sku: 'NPH-BLU-M',
				color: 'blue',
				size: 'M',
				stock: 8,
			},
			{
				sku: 'NPH-BLU-L',
				color: 'blue',
				size: 'L',
				stock: 4,
			},
			{
				sku: 'NPH-BLU-XL',
				color: 'blue',
				size: 'XL',
				stock: 0,
			},
		],
	},

	{
		name: 'White Zip Hoodie',
		slug: 'white-zip-hoodie',
		description: 'Full-zip hoodie in crisp white with a relaxed fit.',
		priceInCents: 16490,
		gender: 'unisex',
		category: 'hoodies',

		images: [
			{
				alt: 'White Zip Hoodie front view',
			},
			{
				alt: 'White Zip Hoodie back view',
			},
		],

		variants: [
			{
				sku: 'WZH-WHT-S',
				color: 'white',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'WZH-WHT-M',
				color: 'white',
				size: 'M',
				stock: 9,
			},
			{
				sku: 'WZH-WHT-L',
				color: 'white',
				size: 'L',
				stock: 2,
			},
		],
	},

	{
		name: 'Charcoal Oversized Hoodie',
		slug: 'charcoal-oversized-hoodie',
		description: 'Oversized hoodie with dropped shoulders in charcoal gray.',
		priceInCents: 15990,
		gender: 'female',
		category: 'hoodies',

		images: [
			{
				alt: 'Charcoal Oversized Hoodie front view',
			},
			{
				alt: 'Charcoal Oversized Hoodie back view',
			},
		],

		variants: [
			{
				sku: 'COH-GRY-XS',
				color: 'gray',
				size: 'XS',
				stock: 2,
			},
			{
				sku: 'COH-GRY-S',
				color: 'gray',
				size: 'S',
				stock: 6,
			},
			{
				sku: 'COH-GRY-M',
				color: 'gray',
				size: 'M',
				stock: 3,
			},
			{
				sku: 'COH-GRY-L',
				color: 'gray',
				size: 'L',
				stock: 0,
			},
		],
	},

	{
		name: 'Black Zip-Up Hoodie',
		slug: 'black-zip-up-hoodie',
		description: 'Everyday zip-up hoodie in classic black.',
		priceInCents: 16990,
		gender: 'male',
		category: 'hoodies',

		images: [
			{
				alt: 'Black Zip-Up Hoodie front view',
			},
			{
				alt: 'Black Zip-Up Hoodie back view',
			},
		],

		variants: [
			{
				sku: 'BZH-BLK-S',
				color: 'black',
				size: 'S',
				stock: 4,
			},
			{
				sku: 'BZH-BLK-M',
				color: 'black',
				size: 'M',
				stock: 11,
			},
			{
				sku: 'BZH-BLK-L',
				color: 'black',
				size: 'L',
				stock: 6,
			},
			{
				sku: 'BZH-BLK-XL',
				color: 'black',
				size: 'XL',
				stock: 2,
			},
		],
	},

	{
		name: 'Blush Beige Hoodie',
		slug: 'blush-beige-hoodie',
		description: 'Cozy pullover hoodie in a soft blush beige.',
		priceInCents: 14490,
		gender: 'female',
		category: 'hoodies',

		images: [
			{
				alt: 'Blush Beige Hoodie front view',
			},
			{
				alt: 'Blush Beige Hoodie back view',
			},
		],

		variants: [
			{
				sku: 'BBH-BGE-S',
				color: 'beige',
				size: 'S',
				stock: 3,
			},
			{
				sku: 'BBH-BGE-M',
				color: 'beige',
				size: 'M',
				stock: 5,
			},
			{
				sku: 'BBH-BGE-L',
				color: 'beige',
				size: 'L',
				stock: 0,
			},
		],
	},

	{
		name: 'Olive Green Hoodie',
		slug: 'olive-green-hoodie',
		description: 'Heavyweight hoodie finished in olive green.',
		priceInCents: 15490,
		gender: 'unisex',
		category: 'hoodies',

		images: [
			{
				alt: 'Olive Green Hoodie front view',
			},
			{
				alt: 'Olive Green Hoodie back view',
			},
		],

		variants: [
			{
				sku: 'OGH-GRN-S',
				color: 'green',
				size: 'S',
				stock: 6,
			},
			{
				sku: 'OGH-GRN-M',
				color: 'green',
				size: 'M',
				stock: 9,
			},
			{
				sku: 'OGH-GRN-L',
				color: 'green',
				size: 'L',
				stock: 4,
			},
			{
				sku: 'OGH-GRN-XL',
				color: 'green',
				size: 'XL',
				stock: 1,
			},
		],
	},

	{
		name: 'Relaxed Fit Jacket',
		slug: 'relaxed-fit-jacket',
		description: 'Lightweight jacket with a clean relaxed silhouette.',
		priceInCents: 21990,
		gender: 'female',
		category: 'jackets',

		images: [
			{
				alt: 'Relaxed Fit Jacket front view',
			},
			{
				alt: 'Relaxed Fit Jacket back view',
			},
		],

		variants: [
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

	{
		name: 'Black Utility Jacket',
		slug: 'black-utility-jacket',
		description: 'Structured utility jacket with functional everyday styling.',
		priceInCents: 24990,
		gender: 'male',
		category: 'jackets',

		images: [
			{
				alt: 'Black Utility Jacket front view',
			},
			{
				alt: 'Black Utility Jacket back view',
			},
		],

		variants: [
			{
				sku: 'BUJ-BLK-M',
				color: 'black',
				size: 'M',
				stock: 5,
			},
			{
				sku: 'BUJ-BLK-L',
				color: 'black',
				size: 'L',
				stock: 4,
			},
			{
				sku: 'BUJ-BLK-XL',
				color: 'black',
				size: 'XL',
				stock: 2,
			},
		],
	},

	{
		name: 'Denim Everyday Jacket',
		slug: 'denim-everyday-jacket',
		description: 'Classic denim jacket designed for easy everyday layering.',
		priceInCents: 22990,
		gender: 'unisex',
		category: 'jackets',

		images: [
			{
				alt: 'Denim Everyday Jacket front view',
			},
			{
				alt: 'Denim Everyday Jacket back view',
			},
		],

		variants: [
			{
				sku: 'DEJ-BLU-S',
				color: 'blue',
				size: 'S',
				stock: 4,
			},
			{
				sku: 'DEJ-BLU-M',
				color: 'blue',
				size: 'M',
				stock: 6,
			},
			{
				sku: 'DEJ-BLU-L',
				color: 'blue',
				size: 'L',
				stock: 2,
			},
		],
	},

	{
		name: 'White Bomber Jacket',
		slug: 'white-bomber-jacket',
		description: 'Lightweight bomber jacket in clean white.',
		priceInCents: 23990,
		gender: 'unisex',
		category: 'jackets',

		images: [
			{
				alt: 'White Bomber Jacket front view',
			},
			{
				alt: 'White Bomber Jacket back view',
			},
		],

		variants: [
			{
				sku: 'WBJ-WHT-S',
				color: 'white',
				size: 'S',
				stock: 2,
			},
			{
				sku: 'WBJ-WHT-M',
				color: 'white',
				size: 'M',
				stock: 5,
			},
			{
				sku: 'WBJ-WHT-L',
				color: 'white',
				size: 'L',
				stock: 0,
			},
		],
	},

	{
		name: 'Gray Field Jacket',
		slug: 'gray-field-jacket',
		description: 'Structured field jacket in a durable gray finish.',
		priceInCents: 25990,
		gender: 'male',
		category: 'jackets',

		images: [
			{
				alt: 'Gray Field Jacket front view',
			},
			{
				alt: 'Gray Field Jacket back view',
			},
		],

		variants: [
			{
				sku: 'GFJ-GRY-M',
				color: 'gray',
				size: 'M',
				stock: 4,
			},
			{
				sku: 'GFJ-GRY-L',
				color: 'gray',
				size: 'L',
				stock: 6,
			},
			{
				sku: 'GFJ-GRY-XL',
				color: 'gray',
				size: 'XL',
				stock: 1,
			},
		],
	},

	{
		name: 'Forest Green Jacket',
		slug: 'forest-green-jacket',
		description: 'Water-resistant jacket in a deep forest green.',
		priceInCents: 24490,
		gender: 'male',
		category: 'jackets',

		images: [
			{
				alt: 'Forest Green Jacket front view',
			},
			{
				alt: 'Forest Green Jacket back view',
			},
		],

		variants: [
			{
				sku: 'FGJ-GRN-S',
				color: 'green',
				size: 'S',
				stock: 3,
			},
			{
				sku: 'FGJ-GRN-M',
				color: 'green',
				size: 'M',
				stock: 7,
			},
			{
				sku: 'FGJ-GRN-L',
				color: 'green',
				size: 'L',
				stock: 2,
			},
		],
	},

	{
		name: 'Cream Trench Jacket',
		slug: 'cream-trench-jacket',
		description: 'Classic trench jacket in a soft cream tone.',
		priceInCents: 26990,
		gender: 'female',
		category: 'jackets',

		images: [
			{
				alt: 'Cream Trench Jacket front view',
			},
			{
				alt: 'Cream Trench Jacket back view',
			},
		],

		variants: [
			{
				sku: 'CTJ-BGE-XS',
				color: 'beige',
				size: 'XS',
				stock: 1,
			},
			{
				sku: 'CTJ-BGE-S',
				color: 'beige',
				size: 'S',
				stock: 4,
			},
			{
				sku: 'CTJ-BGE-M',
				color: 'beige',
				size: 'M',
				stock: 6,
			},
			{
				sku: 'CTJ-BGE-L',
				color: 'beige',
				size: 'L',
				stock: 0,
			},
		],
	},

	{
		name: 'Navy Blue Puffer Jacket',
		slug: 'navy-blue-puffer-jacket',
		description: 'Insulated puffer jacket in navy blue.',
		priceInCents: 27990,
		gender: 'unisex',
		category: 'jackets',

		images: [
			{
				alt: 'Navy Blue Puffer Jacket front view',
			},
			{
				alt: 'Navy Blue Puffer Jacket back view',
			},
		],

		variants: [
			{
				sku: 'NBP-BLU-S',
				color: 'blue',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'NBP-BLU-M',
				color: 'blue',
				size: 'M',
				stock: 8,
			},
			{
				sku: 'NBP-BLU-L',
				color: 'blue',
				size: 'L',
				stock: 3,
			},
			{
				sku: 'NBP-BLU-XL',
				color: 'blue',
				size: 'XL',
				stock: 0,
			},
		],
	},

	{
		name: 'Black Leather-Look Jacket',
		slug: 'black-leather-look-jacket',
		description: 'Faux leather jacket with a sleek black finish.',
		priceInCents: 28990,
		gender: 'female',
		category: 'jackets',

		images: [
			{
				alt: 'Black Leather-Look Jacket front view',
			},
			{
				alt: 'Black Leather-Look Jacket back view',
			},
		],

		variants: [
			{
				sku: 'BLJ-BLK-S',
				color: 'black',
				size: 'S',
				stock: 2,
			},
			{
				sku: 'BLJ-BLK-M',
				color: 'black',
				size: 'M',
				stock: 5,
			},
			{
				sku: 'BLJ-BLK-L',
				color: 'black',
				size: 'L',
				stock: 1,
			},
		],
	},

	{
		name: 'Minimal Black Pants',
		slug: 'minimal-black-pants',
		description: 'Clean straight-leg pants designed for versatile styling.',
		priceInCents: 15990,
		gender: 'male',
		category: 'pants',

		images: [
			{
				alt: 'Minimal Black Pants front view',
			},
			{
				alt: 'Minimal Black Pants back view',
			},
		],

		variants: [
			{
				sku: 'MBP-BLK-S',
				color: 'black',
				size: 'S',
				stock: 0,
			},
			{
				sku: 'MBP-BLK-M',
				color: 'black',
				size: 'M',
				stock: 4,
			},
			{
				sku: 'MBP-BLK-L',
				color: 'black',
				size: 'L',
				stock: 7,
			},
			{
				sku: 'MBP-BLK-XL',
				color: 'black',
				size: 'XL',
				stock: 3,
			},
		],
	},

	{
		name: 'Wide Leg Beige Pants',
		slug: 'wide-leg-beige-pants',
		description: 'High-rise wide-leg pants with a relaxed modern silhouette.',
		priceInCents: 16990,
		gender: 'female',
		category: 'pants',

		images: [
			{
				alt: 'Wide Leg Beige Pants front view',
			},
			{
				alt: 'Wide Leg Beige Pants back view',
			},
		],

		variants: [
			{
				sku: 'WLB-BGE-XS',
				color: 'beige',
				size: 'XS',
				stock: 2,
			},
			{
				sku: 'WLB-BGE-S',
				color: 'beige',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'WLB-BGE-M',
				color: 'beige',
				size: 'M',
				stock: 7,
			},
			{
				sku: 'WLB-BGE-L',
				color: 'beige',
				size: 'L',
				stock: 1,
			},
		],
	},

	{
		name: 'White Linen Pants',
		slug: 'white-linen-pants',
		description: 'Breathable linen-blend pants in crisp white.',
		priceInCents: 14990,
		gender: 'female',
		category: 'pants',

		images: [
			{
				alt: 'White Linen Pants front view',
			},
			{
				alt: 'White Linen Pants back view',
			},
		],

		variants: [
			{
				sku: 'WLP-WHT-XS',
				color: 'white',
				size: 'XS',
				stock: 3,
			},
			{
				sku: 'WLP-WHT-S',
				color: 'white',
				size: 'S',
				stock: 7,
			},
			{
				sku: 'WLP-WHT-M',
				color: 'white',
				size: 'M',
				stock: 4,
			},
			{
				sku: 'WLP-WHT-L',
				color: 'white',
				size: 'L',
				stock: 0,
			},
		],
	},

	{
		name: 'Gray Tapered Pants',
		slug: 'gray-tapered-pants',
		description: 'Tapered everyday pants in a versatile gray.',
		priceInCents: 16490,
		gender: 'male',
		category: 'pants',

		images: [
			{
				alt: 'Gray Tapered Pants front view',
			},
			{
				alt: 'Gray Tapered Pants back view',
			},
		],

		variants: [
			{
				sku: 'GTP-GRY-S',
				color: 'gray',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'GTP-GRY-M',
				color: 'gray',
				size: 'M',
				stock: 9,
			},
			{
				sku: 'GTP-GRY-L',
				color: 'gray',
				size: 'L',
				stock: 6,
			},
			{
				sku: 'GTP-GRY-XL',
				color: 'gray',
				size: 'XL',
				stock: 2,
			},
		],
	},

	{
		name: 'Navy Cargo Pants',
		slug: 'navy-cargo-pants',
		description: 'Utility cargo pants in navy blue.',
		priceInCents: 17990,
		gender: 'unisex',
		category: 'pants',

		images: [
			{
				alt: 'Navy Cargo Pants front view',
			},
			{
				alt: 'Navy Cargo Pants back view',
			},
		],

		variants: [
			{
				sku: 'NCP-BLU-S',
				color: 'blue',
				size: 'S',
				stock: 4,
			},
			{
				sku: 'NCP-BLU-M',
				color: 'blue',
				size: 'M',
				stock: 8,
			},
			{
				sku: 'NCP-BLU-L',
				color: 'blue',
				size: 'L',
				stock: 3,
			},
			{
				sku: 'NCP-BLU-XL',
				color: 'blue',
				size: 'XL',
				stock: 0,
			},
		],
	},

	{
		name: 'Olive Cargo Pants',
		slug: 'olive-cargo-pants',
		description: 'Relaxed cargo pants in olive green.',
		priceInCents: 17490,
		gender: 'male',
		category: 'pants',

		images: [
			{
				alt: 'Olive Cargo Pants front view',
			},
			{
				alt: 'Olive Cargo Pants back view',
			},
		],

		variants: [
			{
				sku: 'OCP-GRN-S',
				color: 'green',
				size: 'S',
				stock: 2,
			},
			{
				sku: 'OCP-GRN-M',
				color: 'green',
				size: 'M',
				stock: 6,
			},
			{
				sku: 'OCP-GRN-L',
				color: 'green',
				size: 'L',
				stock: 1,
			},
		],
	},

	{
		name: 'Black Wide Leg Pants',
		slug: 'black-wide-leg-pants',
		description: 'Flowy wide-leg pants in classic black.',
		priceInCents: 15990,
		gender: 'female',
		category: 'pants',

		images: [
			{
				alt: 'Black Wide Leg Pants front view',
			},
			{
				alt: 'Black Wide Leg Pants back view',
			},
		],

		variants: [
			{
				sku: 'BWP-BLK-XS',
				color: 'black',
				size: 'XS',
				stock: 3,
			},
			{
				sku: 'BWP-BLK-S',
				color: 'black',
				size: 'S',
				stock: 6,
			},
			{
				sku: 'BWP-BLK-M',
				color: 'black',
				size: 'M',
				stock: 0,
			},
			{
				sku: 'BWP-BLK-L',
				color: 'black',
				size: 'L',
				stock: 4,
			},
		],
	},

	{
		name: 'Beige Chino Pants',
		slug: 'beige-chino-pants',
		description: 'Everyday chino pants in warm beige.',
		priceInCents: 14990,
		gender: 'male',
		category: 'pants',

		images: [
			{
				alt: 'Beige Chino Pants front view',
			},
			{
				alt: 'Beige Chino Pants back view',
			},
		],

		variants: [
			{
				sku: 'BCP-BGE-S',
				color: 'beige',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'BCP-BGE-M',
				color: 'beige',
				size: 'M',
				stock: 10,
			},
			{
				sku: 'BCP-BGE-L',
				color: 'beige',
				size: 'L',
				stock: 4,
			},
			{
				sku: 'BCP-BGE-XL',
				color: 'beige',
				size: 'XL',
				stock: 1,
			},
		],
	},

	{
		name: 'Gray Jogger Pants',
		slug: 'gray-jogger-pants',
		description: 'Comfortable jogger pants in heather gray.',
		priceInCents: 13990,
		gender: 'unisex',
		category: 'pants',

		images: [
			{
				alt: 'Gray Jogger Pants front view',
			},
			{
				alt: 'Gray Jogger Pants back view',
			},
		],

		variants: [
			{
				sku: 'GJP-GRY-S',
				color: 'gray',
				size: 'S',
				stock: 6,
			},
			{
				sku: 'GJP-GRY-M',
				color: 'gray',
				size: 'M',
				stock: 9,
			},
			{
				sku: 'GJP-GRY-L',
				color: 'gray',
				size: 'L',
				stock: 3,
			},
		],
	},

	{
		name: 'Gray Relaxed Sweatshirt',
		slug: 'gray-relaxed-sweatshirt',
		description: 'Soft crewneck sweatshirt with a relaxed everyday fit.',
		priceInCents: 11990,
		gender: 'unisex',
		category: 'sweatshirts',

		images: [
			{
				alt: 'Gray Relaxed Sweatshirt front view',
			},
			{
				alt: 'Gray Relaxed Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'GRS-GRY-S',
				color: 'gray',
				size: 'S',
				stock: 7,
			},
			{
				sku: 'GRS-GRY-M',
				color: 'gray',
				size: 'M',
				stock: 9,
			},
			{
				sku: 'GRS-GRY-L',
				color: 'gray',
				size: 'L',
				stock: 5,
			},
			{
				sku: 'GRS-GRY-XL',
				color: 'gray',
				size: 'XL',
				stock: 2,
			},
		],
	},

	{
		name: 'Navy Essential Sweatshirt',
		slug: 'navy-essential-sweatshirt',
		description: 'Classic navy sweatshirt with a minimal crewneck design.',
		priceInCents: 12990,
		gender: 'male',
		category: 'sweatshirts',

		images: [
			{
				alt: 'Navy Essential Sweatshirt front view',
			},
			{
				alt: 'Navy Essential Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'NES-BLU-S',
				color: 'blue',
				size: 'S',
				stock: 4,
			},
			{
				sku: 'NES-BLU-M',
				color: 'blue',
				size: 'M',
				stock: 6,
			},
			{
				sku: 'NES-BLU-L',
				color: 'blue',
				size: 'L',
				stock: 3,
			},
		],
	},

	{
		name: 'Cream Everyday Sweatshirt',
		slug: 'cream-everyday-sweatshirt',
		description: 'Comfortable cream sweatshirt made for effortless layering.',
		priceInCents: 12490,
		gender: 'female',
		category: 'sweatshirts',

		images: [
			{
				alt: 'Cream Everyday Sweatshirt front view',
			},
			{
				alt: 'Cream Everyday Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'CES-BGE-XS',
				color: 'beige',
				size: 'XS',
				stock: 3,
			},
			{
				sku: 'CES-BGE-S',
				color: 'beige',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'CES-BGE-M',
				color: 'beige',
				size: 'M',
				stock: 2,
			},
		],
	},

	{
		name: 'Black Essential Sweatshirt',
		slug: 'black-essential-sweatshirt',
		description: 'Classic crewneck sweatshirt in essential black.',
		priceInCents: 12990,
		gender: 'unisex',
		category: 'sweatshirts',

		images: [
			{
				alt: 'Black Essential Sweatshirt front view',
			},
			{
				alt: 'Black Essential Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'BES-BLK-S',
				color: 'black',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'BES-BLK-M',
				color: 'black',
				size: 'M',
				stock: 9,
			},
			{
				sku: 'BES-BLK-L',
				color: 'black',
				size: 'L',
				stock: 4,
			},
			{
				sku: 'BES-BLK-XL',
				color: 'black',
				size: 'XL',
				stock: 0,
			},
		],
	},

	{
		name: 'White Crewneck Sweatshirt',
		slug: 'white-crewneck-sweatshirt',
		description: 'Soft crewneck sweatshirt in clean white.',
		priceInCents: 12490,
		gender: 'female',
		category: 'sweatshirts',

		images: [
			{
				alt: 'White Crewneck Sweatshirt front view',
			},
			{
				alt: 'White Crewneck Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'WCS-WHT-XS',
				color: 'white',
				size: 'XS',
				stock: 2,
			},
			{
				sku: 'WCS-WHT-S',
				color: 'white',
				size: 'S',
				stock: 6,
			},
			{
				sku: 'WCS-WHT-M',
				color: 'white',
				size: 'M',
				stock: 3,
			},
			{
				sku: 'WCS-WHT-L',
				color: 'white',
				size: 'L',
				stock: 0,
			},
		],
	},

	{
		name: 'Forest Green Sweatshirt',
		slug: 'forest-green-sweatshirt',
		description: 'Everyday sweatshirt in a rich forest green.',
		priceInCents: 13490,
		gender: 'male',
		category: 'sweatshirts',

		images: [
			{
				alt: 'Forest Green Sweatshirt front view',
			},
			{
				alt: 'Forest Green Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'FGS-GRN-S',
				color: 'green',
				size: 'S',
				stock: 4,
			},
			{
				sku: 'FGS-GRN-M',
				color: 'green',
				size: 'M',
				stock: 7,
			},
			{
				sku: 'FGS-GRN-L',
				color: 'green',
				size: 'L',
				stock: 2,
			},
		],
	},

	{
		name: 'Charcoal Zip Sweatshirt',
		slug: 'charcoal-zip-sweatshirt',
		description: 'Zip-front sweatshirt in charcoal gray.',
		priceInCents: 13990,
		gender: 'male',
		category: 'sweatshirts',

		images: [
			{
				alt: 'Charcoal Zip Sweatshirt front view',
			},
			{
				alt: 'Charcoal Zip Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'CZS-GRY-S',
				color: 'gray',
				size: 'S',
				stock: 3,
			},
			{
				sku: 'CZS-GRY-M',
				color: 'gray',
				size: 'M',
				stock: 8,
			},
			{
				sku: 'CZS-GRY-L',
				color: 'gray',
				size: 'L',
				stock: 5,
			},
			{
				sku: 'CZS-GRY-XL',
				color: 'gray',
				size: 'XL',
				stock: 1,
			},
		],
	},

	{
		name: 'Sage Cropped Sweatshirt',
		slug: 'sage-cropped-sweatshirt',
		description: 'Cropped sweatshirt with a relaxed fit in sage green.',
		priceInCents: 12990,
		gender: 'female',
		category: 'sweatshirts',

		images: [
			{
				alt: 'Sage Cropped Sweatshirt front view',
			},
			{
				alt: 'Sage Cropped Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'SCS-GRN-XS',
				color: 'green',
				size: 'XS',
				stock: 2,
			},
			{
				sku: 'SCS-GRN-S',
				color: 'green',
				size: 'S',
				stock: 5,
			},
			{
				sku: 'SCS-GRN-M',
				color: 'green',
				size: 'M',
				stock: 0,
			},
		],
	},

	{
		name: 'Ivory Oversized Sweatshirt',
		slug: 'ivory-oversized-sweatshirt',
		description: 'Oversized sweatshirt in a soft ivory white.',
		priceInCents: 13490,
		gender: 'unisex',
		category: 'sweatshirts',

		images: [
			{
				alt: 'Ivory Oversized Sweatshirt front view',
			},
			{
				alt: 'Ivory Oversized Sweatshirt back view',
			},
		],

		variants: [
			{
				sku: 'IOS-WHT-S',
				color: 'white',
				size: 'S',
				stock: 6,
			},
			{
				sku: 'IOS-WHT-M',
				color: 'white',
				size: 'M',
				stock: 9,
			},
			{
				sku: 'IOS-WHT-L',
				color: 'white',
				size: 'L',
				stock: 3,
			},
		],
	},
];

async function main() {
	await prisma.productImage.deleteMany();
	await prisma.productVariant.deleteMany();
	await prisma.product.deleteMany();
	await prisma.category.deleteMany();

	const categoryMap = new Map<string, number>();

	for (const category of categories) {
		const createdCategory = await prisma.category.create({
			data: category,
		});

		categoryMap.set(category.slug, createdCategory.id);
	}

	for (const product of products) {
		const categoryId = categoryMap.get(product.category);

		if (!categoryId) {
			throw new Error(`Category "${product.category}" not found`);
		}

		await prisma.product.create({
			data: {
				name: product.name,
				slug: product.slug,
				description: product.description,
				priceInCents: product.priceInCents,
				gender: product.gender,
				categoryId,

				images: {
					create: product.images.map((image, position) => ({
						...image,
						url: getProductImageUrl(product.slug, position),
						position,
					})),
				},

				variants: {
					create: product.variants,
				},
			},
		});
	}

	console.log(
		`Seed completed: ${categories.length} categories and ${products.length} products.`,
	);
}

main()
	.catch((error) => {
		console.error(error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
