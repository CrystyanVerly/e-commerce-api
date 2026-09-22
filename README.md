# E-commerce API

REST API for my **[e-commerce](https://github.com/CrystyanVerly/e-commerce)** project. 

built with **Node.js**, **TypeScript**, **Fastify**, **Prisma ORM** and **SQLite**.

This repository is part of a personal study and portfolio project. Its main purpose is to practice backend development, API design, database modeling, filtering, pagination, static asset delivery and integration with a separate React storefront. It is not intended to represent a production or commercial service.

The API provides product catalog data, categories, product variants, inventory, filters, search, sorting, pagination and static product images.

> **Image usage disclaimer**
> Some product images used in this repository were collected from publicly available references and may not be licensed for redistribution or commercial use. They are included solely to support this non-commercial educational and portfolio project, no ownership is claimed over them, and all rights remain with their respective owners. These images should be replaced with properly licensed assets before any commercial use. If you are a rights holder and would like an image removed, it can be replaced or removed from the project.

## Live API

**Base URL**

```text
https://e-commerce-api-oh91.onrender.com
```

Example:

```text
https://e-commerce-api-oh91.onrender.com/products?limit=3
```

## Tech Stack

- Node.js 24
- TypeScript
- Fastify
- Prisma ORM
- SQLite
- `@fastify/cors`
- `@fastify/static`
- Render

## Features

- Product catalog
- Product categories
- Product variants
- Stock per variant
- Size support
- Color support
- Gender support
- Multiple images per product
- Product lookup by slug
- Product search
- Category filtering
- Gender filtering
- Color filtering
- Size filtering
- Sorting
- Pagination
- Dynamic filter options
- Development seed data
- Static image hosting
- Health check endpoint

## Product Model

Each product belongs to a category and may contain multiple images and variants.

```text
Category
└── Product
    ├── ProductImage[]
    └── ProductVariant[]
        ├── color
        ├── size
        ├── SKU
        └── stock
```

Example:

```text
Essential Hoodie
├── Gray / S  → 5 units
├── Gray / M  → 9 units
├── Gray / L  → 4 units
├── Black / S → 2 units
├── Black / M → 6 units
└── Black / L → 0 units
```

Stock is stored at the **variant level**, allowing the frontend to show availability for specific combinations of color and size.

## API Endpoints

### Health check

```http
GET /health
```

Example response:

```json
{
  "status": "ok"
}
```

### List products

```http
GET /products
```

Supported query parameters:

| Parameter | Description | Example |
| --- | --- | --- |
| `gender` | Filter by gender | `male` |
| `category` | Filter by category slug | `t-shirts` |
| `color` | Filter by available color | `black` |
| `size` | Filter by available size | `M` |
| `search` | Search by product name | `hoodie` |
| `sort` | Sort products | `price-asc` |
| `page` | Page number | `1` |
| `limit` | Items per page | `12` |

Available sort values:

```text
newest
oldest
price-asc
price-desc
name-asc
```

Example:

```http
GET /products?gender=male&color=black&size=M&sort=price-asc&page=1&limit=12
```

Example response shape:

```json
{
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 12,
    "total": 0,
    "totalPages": 0
  }
}
```

### Product by slug

```http
GET /products/:slug
```

Example:

```http
GET /products/ivory-oversized-sweatshirt
```

The response includes:

- Category
- Product images
- Product variants
- Stock information

### Product filters

```http
GET /products/filters
```

Returns the available catalog filter values:

```json
{
  "categories": [],
  "genders": [],
  "colors": [],
  "sizes": []
}
```

### Categories

```http
GET /categories
```

Returns all product categories ordered by name.

## Product Images

Product images are served directly by the API.

Example:

```text
https://e-commerce-api-oh91.onrender.com/images/products/ivory-oversized-sweatshirt/ivory-oversized-sweatshirt-1.webp
```

Images follow this structure:

```text
public/
└── images/
    └── products/
        └── {product-slug}/
            ├── {product-slug}-1.webp
            ├── {product-slug}-2.webp
            └── ...
```

The API returns full image URLs, so frontend clients can render them directly.

## Getting Started

### Requirements

- Node.js 24
- npm

### Clone the repository

```bash
git clone https://github.com/CrystyanVerly/e-commerce-api.git
cd e-commerce-api
```

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL="file:./dev.db"
APP_URL="http://localhost:3333"
```

`APP_URL` is used locally to build complete product image URLs.

When deployed to Render, the application can use Render's external service URL automatically.

### Run database migrations

```bash
npx prisma migrate deploy
```

For active schema development, use:

```bash
npx prisma migrate dev
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Seed the database

```bash
npx prisma db seed
```

The seed populates the SQLite database with categories, products, images, variants and stock data for development and portfolio demonstration.

### Start development server

```bash
npm run dev
```

The API will be available at:

```text
http://localhost:3333
```

## Production Build

Build the project:

```bash
npm run build
```

Start the production version:

```bash
npm start
```

Current scripts:

```json
{
  "dev": "tsx watch src/server.ts",
  "build": "prisma generate && tsc",
  "start": "prisma migrate deploy && prisma db seed && node dist/server.js"
}
```

## Project Structure

```text
e-commerce-api/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── public/
│   └── images/
│       └── products/
│
├── src/
│   ├── generated/
│   ├── routes/
│   │   ├── categories.ts
│   │   └── products.ts
│   ├── scripts/
│   │   └── seed.ts
│   ├── utils/
│   │   └── productResponse.ts
│   ├── prisma.ts
│   └── server.ts
│
├── .env.example
├── package.json
├── prisma7.config.ts
└── tsconfig.json
```

## Database

The project currently uses **SQLite**.

Main models:

- `Category`
- `Product`
- `ProductImage`
- `ProductVariant`

Prisma is used for:

- Schema definition
- Database migrations
- Relations
- Queries
- Generated TypeScript client
- Seed data

## Catalog Filters

The API supports combining filters in the same request.

Example:

```http
GET /products?gender=female&category=hoodies&color=beige&size=S
```

Only products with matching in-stock variants are returned for color and size filters.

## Portfolio Scope

This API is designed primarily as a portfolio project and as the backend for a React e-commerce storefront.

The current version focuses on the catalog experience. Features such as authentication, orders, payments and production-grade persistence are intentionally outside the current scope.

## Frontend

This API is consumed by a separate React + TypeScript e-commerce frontend.

## License

This project is intended for educational and portfolio purposes.
