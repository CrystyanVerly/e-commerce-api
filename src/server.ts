import path from 'node:path';
import { fileURLToPath } from 'node:url';

import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';

import { categoriesRoutes } from './routes/categories.js';
import { productsRoutes } from './routes/products.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = Fastify({
	logger: true,
});

app.register(cors, {
	origin: 'http://localhost:5173',
});

app.register(fastifyStatic, {
	root: path.join(__dirname, '../public'),
	prefix: '/',
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
