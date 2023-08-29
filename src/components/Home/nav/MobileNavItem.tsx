import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ArrowRight from '../../../../public/assets/icon-arrow-right.svg'

export const MobileNavItem = () => {
	return (
		<div className='relative mx-auto h-40  w-full rounded-lg bg-rose pt-16 max-w-xs '>
			<Image
				src='/assets/image-category-thumbnail-headphones.png'
				width={150}
				height={150}
				alt=''
				className='absolute bottom-[75px] left-1/2 -translate-x-1/2'
			/>
			<h3 className='mt-5 text-center text-H6 uppercase'>Headphones</h3>
			<Link href='/' className='text-lightBrown mt-3.5 flex items-center justify-center gap-3 font-[500] uppercase'>
				shop <ArrowRight />
			</Link>
		</div>
	)
}
