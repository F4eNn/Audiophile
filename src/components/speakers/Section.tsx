import React from 'react';

import { ProductsData } from '@/types/data';
import { CategoryProduct } from '../ui/category/CategoryProduct';
import { Wrapper } from '../ui/Wrapper';

type SpeakersSectionProps = {
	speakers: ProductsData[];
};

export const SpeakersSection = ({ speakers }: SpeakersSectionProps) => {
	return (
		<section className='mx-3 mt-28 '>
			<Wrapper>
				<div className='flex flex-col-reverse gap-10'>
					{speakers.map((val, idx) => {
						if (idx === 0) return <CategoryProduct key={val.id} {...val} rowReverse='lg:flex-row-reverse' />;
						return <CategoryProduct key={val.id} {...val} />;
					})}
				</div>
			</Wrapper>
		</section>
	);
};
