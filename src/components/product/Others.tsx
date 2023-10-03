import React from 'react';
import Image from 'next/image';

import { ProductData } from '@/types/data';
import { Wrapper } from '../ui/Wrapper';
import { AnimateSection } from '../ui/AnimateSection';
import { LinkButton } from '../ui/LinkButton';

export const OtherProducts = ({ others, category }: ProductData) => {
	return (
		<section className='mx-6 mt-[150px] text-primaryDark lg:mx-7'>
			<Wrapper>
				<AnimateSection>
					<h2 className='mb-24 text-center text-H2 uppercase'>you may also like</h2>
					<div className='items-center gap-5 md:flex'>
						{others.map(({ image, name, slug }, idx) => (
							<div key={idx} className=' mb-24 flex  w-full  flex-col items-center justify-center gap-8 md:mb-0'>
								<div className='relative aspect-video w-full bg-rose md:aspect-[1/1.5] lg:aspect-square'>
									<picture>
										<source media='(min-width: 1024px)' srcSet={image.desktop} />
										<source media='(min-width: 768px)' srcSet={image.tablet} />
										<Image src={image.mobile} alt={name} fill className=' rounded-lg object-contain' />
									</picture>
								</div>
								<h2 className='text-H3 uppercase'>{name}</h2>
								<LinkButton href={`/category/${category}/${slug}`} />
							</div>
						))}
					</div>
				</AnimateSection>
			</Wrapper>
		</section>
	);
};
