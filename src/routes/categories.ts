import type { FastifyPluginAsync } from 'fastify';

import { prisma } from '../prisma.js';

export const categoriesRoutes: FastifyPluginAsync = async (app) => {
	app.get('/categories', async () => {
		const categories = await prisma.category.findMany({
			orderBy: {
				name: 'asc',
			},
		});

		return categories;
	});
};
