import { ProductsData } from '@/types/data';

export const fetcher = async (filter?: string, slug?: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/products`);
	const data = await res.json();
	const allProducts = data.data.map((item: { attributes: { data: ProductsData } }) => item.attributes.data);
	const getRelevantProduct = allProducts[0].filter((p: ProductsData) => p.category === filter);
	const getProducDetails = allProducts[0].find((p: ProductsData) => p.slug === slug);

	return (filter && getRelevantProduct) || (slug && getProducDetails);
};
