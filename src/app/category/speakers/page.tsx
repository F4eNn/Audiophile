import React from 'react';

import { HeroCategory } from '@/components/ui/category/Hero';
import { SpeakersSection } from '@/components/ui/category/CategorySection';
import { fetcher } from '@/helpers/api';

const getSpeakers = async () => {
	const speakers = await fetcher('speakers');
	return speakers;
};

const SpeakersPage = async () => {
	const speakers = await getSpeakers();

	return (
		<div className='text-primaryDark'>
			<HeroCategory title='speakers' />
			<SpeakersSection products={speakers} />
		</div>
	);
};

export default SpeakersPage;
