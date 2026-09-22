interface ProductImage {
	id: number;
	url: string;
	alt: string | null;
	position: number;
	productId: number;
}

function getAppUrl() {
	const appUrl = process.env.RENDER_EXTERNAL_URL ?? process.env.APP_URL;

	if (!appUrl) {
		throw new Error('Application URL is not defined');
	}

	return appUrl.replace(/\/$/, '');
}

export function mapProductImages<T extends ProductImage>(images: T[]) {
	const appUrl = getAppUrl();

	return images.map((image) => ({
		...image,
		url: `${appUrl}${image.url}`,
	}));
}
