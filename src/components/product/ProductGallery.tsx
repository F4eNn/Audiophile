import React from 'react';
import Image from 'next/image';

import { ProductData } from '@/types/data';
import { Wrapper } from '../ui/Wrapper';
import { AnimateSection } from '../ui/AnimateSection';

export const ProductGallery = ({ gallery, name }: ProductData) => {
	return (
		<section className='mx-6 mt-[100px] lg:mx-7'>
			<Wrapper>
				<AnimateSection>
					<div className='mx-auto flex w-full max-w-[1100px] flex-col items-center gap-5 sm:aspect-video sm:flex-row'>
						<div className='flex h-full w-full flex-col gap-5'>
							<div className='relative aspect-video w-full'>
								<picture>
									<source media='(min-width: 1024px)' srcSet={gallery.first.desktop} />
									<source media='(min-width: 640px)' srcSet={gallery.first.tablet} />
									<Image src={gallery.first.mobile} alt={name} fill className=' rounded-lg' />
								</picture>
							</div>
							<div className='relative aspect-video w-full'>
								<picture>
									<source media='(min-width: 1024px)' srcSet={gallery.second.desktop} />
									<source media='(min-width: 640px)' srcSet={gallery.second.tablet} />
									<Image src={gallery.second.mobile} alt={name} fill className='rounded-lg' />
								</picture>
							</div>
						</div>
						<div className=' relative aspect-square h-full w-full sm:aspect-auto'>
							<picture>
								<source media='(min-width: 1024px)' srcSet={gallery.third.desktop} />
								<source media='(min-width: 640px)' srcSet={gallery.third.tablet} />
								<Image src={gallery.third.mobile} alt={name} fill className='rounded-lg ' />
							</picture>
						</div>
					</div>
				</AnimateSection>
			</Wrapper>
		</section>
	);
};
