import React from 'react'
import Image from 'next/image'

import { Wrapper } from '@/components/ui/Wrapper'
import { LinkButton } from '@/components/ui/LinkButton'
import { AnimateSection } from '@/components/ui/AnimateSection'

export const SpeakerZX7 = () => {
	return (
		<section className='mx-3 mt-20 pb-44'>
			<Wrapper>
				<AnimateSection>
					<div className='relative z-0 flex aspect-square  max-h-[450px] w-full items-center overflow-hidden rounded-lg sm:aspect-video'>
						<picture>
							<source media='(min-width: 1024px)' srcSet='/assets/home/desktop/image-speaker-zx7.jpg' />
							<source media='(min-width: 640px)' srcSet='/assets/home/tablet/image-speaker-zx7.jpg' />
							<Image src='/assets/home/mobile/image-speaker-zx7.jpg' alt='speaker zx7' fill className=' -z-10 ' />
						</picture>
						<div className='ml-6 space-y-8 sm:ml-12 md:ml-14 lg:ml-36'>
							<h2 className='text-H2 uppercase'>zx7 speaker</h2>
							<LinkButton
								url='/'
								bg='bg-none'
								hoverTextColor='hover:text-white'
								isBorder={true}
								textColor='text-primaryDark'
								bgHover='hover:bg-primaryDark'
							/>
						</div>
					</div>
				</AnimateSection>
			</Wrapper>
		</section>
	)
}