import React from 'react';

import { fetcher } from '@/helpers/api';
import { Product } from '@/components/product/Product';
import { ProductFeatures } from '@/components/product/ProductFeatures';

const getProducDetails = async (slug: string) => {
	const res = await fetcher(undefined, slug);
	return res;
};

const ProductDetail = async ({ params }: { params: { slug: string } }) => {
	const product = await getProducDetails(params.slug);

	return (
		<div className='mt-[100px]'>
			<Product {...product} />
			<ProductFeatures {...product} />
		</div>
	);
};

export default ProductDetail;
