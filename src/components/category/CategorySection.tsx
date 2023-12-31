import React from 'react';

import { ProductData } from '@/types/data';
import { CategoryProduct } from './CategoryProduct';
import { Wrapper } from '../ui/Wrapper';

type SpeakersSectionProps = {
	products: ProductData[];
};

export const SpeakersSection = ({ products }: SpeakersSectionProps) => {
	return (
		<section className='mx-3 mt-28 '>
			<Wrapper>
				<div className='flex flex-col-reverse gap-10'>
					{products.map((val, idx) => {
						if (idx % 2) return <CategoryProduct key={val.id} {...val} rowReverse='lg:flex-row-reverse' />;
						return <CategoryProduct key={val.id} {...val} />;
					})}
				</div>
			</Wrapper>
		</section>
	);
};
