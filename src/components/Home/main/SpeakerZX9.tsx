import Image from 'next/image';
import React from 'react';

import { Wrapper } from '@/components/ui/Wrapper';
import { LinkButton } from '@/components/ui/LinkButton';
import { AnimateSection } from '@/components/ui/AnimateSection';
import { navigationPaths } from '@/constants/navigation';

export const SpeakerZX9 = () => {
	return (
		<section className=' mx-3 '>
			<Wrapper>
				<AnimateSection>
					<div className=' relative z-0 flex w-full flex-col items-center gap-14  overflow-hidden rounded-lg bg-primary py-16 text-center text-white md:gap-16 lg:flex-row lg:justify-center lg:gap-44 '>
						<div className=' absolute -top-[125px] -z-10 aspect-square w-[575px] md:-top-[280px] md:w-[875px] lg:-left-[70px] lg:-top-[25px] lg:w-[1100px]'>
							<Image src='/assets/home/desktop/pattern-circles.svg' alt='' fill className='' />
						</div>
						<picture className='inline-block '>
							<source media='(min-width: 1024px)' srcSet='/assets/home/desktop/image-speaker-zx9.png' />
							<source media='(min-width: 768px)' srcSet='/assets/home/tablet/image-speaker-zx9.png' />
							<Image
								src='/assets/home/mobile/image-speaker-zx9.png'
								alt='speaker zx9'
								width={155}
								height={210}
								className='lg:relative lg:-bottom-[80px] lg:w-[450px]'
							/>
						</picture>
						<div className='jc flex flex-col items-center gap-7 lg:items-start  lg:text-left '>
							<h2 className=' max-w-[150px]  text-H2 uppercase md:max-w-[250px] md:text-H1'>zx9 speaker</h2>
							<p className=' max-w-[250px] text-sm leading-6 text-veryLightPrimary md:max-w-[300px]'>
								Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
							</p>
							<LinkButton
								url={navigationPaths.SpeakerZX9.path}
								label={navigationPaths.SpeakerZX9.label}
								bg='bg-primaryDark'
								bgHover='hover:bg-grayish'
							/>
						</div>
					</div>
				</AnimateSection>
			</Wrapper>
		</section>
	);
};
