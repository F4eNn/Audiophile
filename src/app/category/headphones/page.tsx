import React from 'react';

import { HeroCategory } from '@/components/ui/category/Hero';
import { fetcher } from '@/helpers/api';
import { SpeakersSection } from '@/components/ui/category/CategorySection';

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
