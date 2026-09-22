import 'dotenv/config';

import path from 'node:path';

import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';

import { categoriesRoutes } from './routes/categories.js';
import { productsRoutes } from './routes/products.js';

const app = Fastify({
	logger: true,
});

const allowedOrigins = [
	'http://localhost:5173',
	process.env.FRONTEND_URL,
].filter((origin): origin is string => Boolean(origin));

app.register(cors, {
	origin: allowedOrigins,
});

app.register(fastifyStatic, {
	root: path.join(import.meta.dirname, '../public/images'),
	prefix: '/images/',
});

app.get('/health', async () => {
	return {
		status: 'ok',
	};
});

app.register(productsRoutes);
app.register(categoriesRoutes);

const port = Number(process.env.PORT) || 3333;

async function start() {
	try {
		await app.listen({
			port,
			host: '0.0.0.0',
		});
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
}

start();
