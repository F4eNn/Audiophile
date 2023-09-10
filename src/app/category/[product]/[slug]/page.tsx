import React from 'react';

import { fetcher } from '@/helpers/api';

const getProducDetails = async (slug: string) => {
	const res = await fetcher(undefined, slug);
	return res;
};

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
	const product = await getProducDetails(params.slug);

	return <div>ProductDetail</div>;
};

export default ProductDetail;
