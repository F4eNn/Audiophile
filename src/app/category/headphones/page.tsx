import React from 'react';

import { HeroCategory } from '@/components/category/Hero';
import { fetcher } from '@/helpers/api';
import { SpeakersSection } from '@/components/category/CategorySection';

const getHeadphones = async () => {
	const headphones = await fetcher('headphones');
	return headphones;
};

const HeadphonesPage = async () => {
	const headphones = await getHeadphones();
	return (
		<div>
			<HeroCategory title='headphones' />
			<SpeakersSection products={headphones} />
		</div>
	);
};

export default HeadphonesPage;
