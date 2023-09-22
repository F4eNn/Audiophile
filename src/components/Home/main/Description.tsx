'use client';
import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { AnimateSection } from '@/components/ui/AnimateSection';
import { Wrapper } from '@/components/ui/Wrapper';
import { navigationPaths } from '@/constants/navigation';

export const Description = () => {
	const pathname = usePathname();
	const hideSection = pathname === navigationPaths.register.path || pathname === navigationPaths.checkout.path;
	return (
		<section className={`mx-3 mt-32 pb-44 lg:mt-52 ${hideSection ? 'hidden' : ''} `}>
			<Wrapper>
				<AnimateSection>
					<div className=' flex flex-col items-center gap-3 lg:flex-row-reverse lg:justify-center'>
						<div className='relative aspect-square w-full flex-1 overflow-hidden rounded-lg sm:aspect-video lg:aspect-square '>
							<picture>
								<source media='(min-width: 1024px)' srcSet='/assets/home/desktop/image-best-gear.jpg' />
								<source media='(min-width: 640px)' srcSet='/assets/home/tablet/image-best-gear.jpg' />
								<Image src='/assets/home/mobile/image-best-gear.jpg' alt='A man wearing XX99 mark II headphones' fill />
							</picture>
						</div>
						<div className='mt-14 flex-1 space-y-8 text-center md:space-y-12 lg:text-left'>
							<h2 className='mx-auto max-w-[500px] text-H2 uppercase md:max-w-[650px] md:text-H1 lg:mx-0 lg:max-w-[500px]'>
								bringing you the <span className='text-primary'>best</span> audio gear
							</h2>
							<p className='mx-4 max-w-[750px] text-sm text-[#7d7d7d] md:text-base lg:mx-0 lg:max-w-[550px]'>
								Located at the heart of New York City, Audiophile is the premier store for high end headphones,
								earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms
								available for you to browse and experience a wide range of our products. Stop by our store to meet some
								of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
							</p>
						</div>
					</div>
				</AnimateSection>
			</Wrapper>
		</section>
	);
};
