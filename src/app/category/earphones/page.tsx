import React from 'react';

import { HeroCategory } from '@/components/ui/category/Hero';
import { fetcher } from '@/helpers/api';
import { SpeakersSection } from '@/components/ui/category/CategorySection';

const getEarphones = async () => {
	const earphones = await fetcher('earphones');
	return earphones;
};

const EarphonesPage = async () => {
	const earphones = await getEarphones();
	return (
		<div>
			<HeroCategory title='earphones' />
			<SpeakersSection products={earphones} />
		</div>
	);
};

export default EarphonesPage;
