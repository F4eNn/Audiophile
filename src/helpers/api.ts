import { STRAPI_URL } from '@/constants/url';
import { ProductData } from '@/types/data';

export const fetcher = async (filter?: string, slug?: string) => {
	const res = await fetch(`${STRAPI_URL}/products`);
	const data = await res.json();
	const allProducts = data.data.map((item: { attributes: { data: ProductData } }) => item.attributes.data);
	const getRelevantProduct = allProducts[0].filter((p: ProductData) => p.category === filter);
	const getProducDetails = allProducts[0].find((p: ProductData) => p.slug === slug);

	return (filter && getRelevantProduct) || (slug && getProducDetails);
};
