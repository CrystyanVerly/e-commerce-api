# E-commerce API

REST API for an e-commerce platform built with Node.js, TypeScript, Fastify, Prisma and SQLite.

This project provides the backend for an e-commerce application, handling products, categories, product variants, inventory and catalog filtering.

## Tech Stack

- Node.js
- TypeScript
- Fastify
- Prisma ORM
- SQLite

## Features

- Product catalog
- Product categories
- Product variants
- Stock per size and color
- Gender-based product filtering
- Category filtering
- Color filtering
- Size filtering
- Product search
- Product sorting
- Pagination
- Product lookup by slug
- Database migrations
- Development seed data

## Product Structure

Products can contain multiple variants.

Example:

```text
Essential Hoodie
├── Black / S → 4 units
├── Black / M → 7 units
├── Gray / S  → 2 units
└── Gray / M  → 0 units
