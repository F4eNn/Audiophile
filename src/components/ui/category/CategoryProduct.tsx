import React from 'react';
import Image from 'next/image';

import { ProductsData } from '@/types/data';
import { LinkButton } from '../LinkButton';
import { AnimateSection } from '../AnimateSection';

type CategoryProductProps = ProductsData & {
	rowReverse?: 'lg:flex-row-reverse' | 'lg:flex-row';
};

export const CategoryProduct = ({
	categoryImage,
	name,
	description,
	new: newProduct,
	rowReverse = 'lg:flex-row',
}: CategoryProductProps) => {
	return (
		<AnimateSection>
			<div className={`flex flex-col gap-8 ${rowReverse} lg:items-center lg:justify-around `}>
				<div className='relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-rose lg:aspect-square lg:w-[500px]'>
					<picture>
						<source media='(min-width:1024px)' srcSet={categoryImage.desktop} />
						<source media='(min-width:768px)' srcSet={categoryImage.tablet} />
						<Image src={categoryImage.mobile} alt={name} width={400} height={200} className='md:w-[850px] ' />
					</picture>
				</div>
				<div className='flex flex-col items-center gap-8 px-5 text-center lg:items-start lg:text-left'>
					{newProduct && <p className='text-overline uppercase text-primary'>new product</p>}
					<h2 className={`max-w-[300px] text-H2 uppercase md:max-w-[425px] md:text-H1`}>{name}</h2>
					<p className='max-w-[525px] text-sm leading-6 text-[#7d7d7d]'>{description}</p>
					<LinkButton url='/' />
				</div>
			</div>
		</AnimateSection>
	);
};
