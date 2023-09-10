import React from 'react';
import Image from 'next/image';

import { GoBack } from './GoBack';
import { Wrapper } from '../ui/Wrapper';
import { AddToCart } from './AddToCart';
import { ProductData } from '@/types/data';
import { AnimateSection } from '../ui/AnimateSection';

export const Product = ({ price, new: newProduct, name, description, image }: ProductData) => {
	return (
		<section className='mt-[100px]  text-primaryDark'>
			<Wrapper>
				<AnimateSection>
					<div className='mx-6 flex flex-col lg:mx-7 '>
						<GoBack />
						<div className='flex flex-col gap-10 sm:flex-row sm:items-center md:gap-12'>
							<div className='relative  aspect-square w-full overflow-hidden rounded-lg  bg-rose sm:aspect-auto sm:h-[600px]'>
								<picture>
									<source media='(min-width: 1024px)' srcSet={image.desktop} />
									<source media='(min-width: 640px)' srcSet={image.tablet} />
									<Image src={image.mobile} alt='' fill className='object-contain' />
								</picture>
							</div>
							<div className=' w-full space-y-10'>
								<div className='space-y-10 md:space-y-4'>
									{newProduct && <p className='text-overline uppercase text-primary'>new product</p>}
									<h1 className='max-w-[350px] text-H2 uppercase lg:max-w-[400px] lg:text-H1'>{name}</h1>
								</div>
								<p className='leading-7 text-brown '>{description}</p>
								<p className='text-2xl font-bold tracking-wider'>$ {price}</p>
								<AddToCart />
							</div>
						</div>
					</div>
				</AnimateSection>
			</Wrapper>
		</section>
	);
};
