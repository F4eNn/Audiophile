import React from 'react';

import { HeroCategory } from '@/components/ui/category/Hero';
import { ProductsData } from '@/types/data';
import { SpeakersSection } from '@/components/speakers/Section';

const getSpeakers = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/products`);
	const data = await res.json();
	const allProducts = data.data.map((item: { attributes: { data: ProductsData } }) => item.attributes.data);
	const getRelevantProduct = allProducts[0].filter((p: ProductsData) => p.category === 'speakers');
	return getRelevantProduct;
};

const SpeakersPage = async () => {
	const speakers = await getSpeakers();

	return (
		<div className='text-primaryDark'>
			<HeroCategory title='speakers' />
			<SpeakersSection speakers={speakers} />
		</div>
	);
};

export default SpeakersPage;
