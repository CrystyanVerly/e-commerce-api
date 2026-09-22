import cors from '@fastify/cors';
import Fastify from 'fastify';

import { categoriesRoutes } from './routes/categories.js';
import { productsRoutes } from './routes/products.js';

const app = Fastify({
	logger: true,
});

app.register(cors, {
	origin: 'http://localhost:5173',
});

app.get('/health', async () => {
	return {
		status: 'ok',
	};
});

app.register(productsRoutes);
app.register(categoriesRoutes);

async function start() {
	try {
		await app.listen({
			port: 3333,
			host: '0.0.0.0',
		});
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
}

start();
