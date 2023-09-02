import React from 'react'
import Image from 'next/image'
import { BsChevronDoubleDown } from 'react-icons/bs'
import Link from 'next/link'

import { LinkButton } from '@/components/ui/LinkButton'
import { Wrapper } from '@/components/ui/Wrapper'

export const Hero = () => {
	return (
		<div className='bg-lightDark'>
			<Wrapper>
				<div className='relative  h-[100dvh] w-full '>
					<div className='relative aspect-square h-full max-h-[1100px] w-full lg:max-h-[900px]'>
						<picture className=''>
							<source media='(min-width:1280px)' srcSet='/assets/home/desktop/image-hero.jpg' />
							<source media='(min-width:768px)' srcSet='/assets/home/tablet/image-header.jpg' />
							<Image
								src='/assets/home/mobile/image-header.jpg'
								alt='headphones'
								fill
								className='object-cover lg:object-contain '
							/>
						</picture>
						<div className='absolute left-1/2 top-1/2 mx-auto mt-10 max-w-md -translate-x-1/2 -translate-y-1/2 space-y-9  text-center text-white md:mt-5 lg:mx-5 xl:left-0 xl:mx-7 xl:translate-x-0 xl:text-left '>
							<div className='space-y-5'>
								<span className='text-gray text-overline uppercase'>new product</span>
								<h1 className=' text-H1 text-[2.8rem] md:text-[3.7rem] md:leading-[4.2rem]'>XX99 MARK II HEADPHONES</h1>
							</div>
							<p className='text-lightGray  font-[500] leading-7 md:text-lg  '>
								Experience natural, lifelike audio and exceptional build quality made for the passionate music
								enthusiast.
							</p>
							<LinkButton url='/' />
						</div>
					</div>
					<Link
						href='/'
						className='text-gray absolute bottom-0 flex w-full animate-bounce justify-center py-2 text-2xl md:bottom-5  md:text-4xl  lg:bottom-5'
					>
						<BsChevronDoubleDown />
					</Link>
				</div>
			</Wrapper>
		</div>
	)
}
