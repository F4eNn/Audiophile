import React from 'react';
import Image from 'next/image';

import { Wrapper } from '@/components/ui/Wrapper';
import { AnimateSection } from '@/components/ui/AnimateSection';
import { LinkButton } from '@/components/ui/LinkButton';
import { navigationPaths } from '@/constants/navigation';

export const Earphones = () => {
	return (
		<section className='mx-3 mt-5 md:mt-10 lg:mt-20'>
			<Wrapper>
				<AnimateSection>
					<div className='flex flex-col gap-3 md:flex-row lg:gap-10'>
						<div className='relative aspect-video max-h-[400px]  flex-1 overflow-hidden rounded-xl md:aspect-square'>
							<picture>
								<source media='(min-width: 1024px)' srcSet='/assets/home/desktop/image-earphones-yx1.jpg' />
								<source media='(min-width: 768px' srcSet='./assets/home/tablet/image-earphones-yx1.jpg' />
								<Image src='/assets/home/mobile/image-earphones-yx1.jpg' alt='' fill />
							</picture>
						</div>
						<div className='mt-5 flex flex-1 flex-col justify-center gap-y-10 rounded-xl bg-rose py-12 pl-5 md:mt-0 md:pl-12 lg:pl-36'>
							<h2 className='text-H2 uppercase'>yx1 earphones</h2>
							<div>
								<LinkButton
									url={navigationPaths.earphonesYX1.path}
									label={navigationPaths.earphonesYX1.label}
									isBorder={true}
									bgHover='hover:bg-primaryDark'
									bg='transparent'
									textColor='text-primaryDark'
									hoverTextColor='hover:text-white'
								/>
							</div>
						</div>
					</div>
				</AnimateSection>
			</Wrapper>
		</section>
	);
};
