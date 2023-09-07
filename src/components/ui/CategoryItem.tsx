import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ArrowRight from '../../../public/assets/icon-arrow-right.svg'
import { ThumbnailProps } from '@/constants/thumbnails'

export const CategoryItem = ({ src, title }: ThumbnailProps) => {
	return (
		<Link
			href='/'
			className=' group relative mx-auto h-40 w-full max-w-xs rounded-lg bg-rose pt-16 transition-transform duration-300 hover:scale-110'
		>
			<Image
				src={src}
				width={150}
				height={150}
				alt='product thumbnail'
				className='absolute bottom-[75px] left-1/2 -translate-x-1/2'
			/>
			<h3 className='mt-5 text-center text-H6 uppercase'>{title}</h3>
			<span className='mt-3.5 flex items-center justify-center gap-3 font-[500] uppercase text-lightBrown transition-colors duration-300 group-hover:text-primary'>
				shop <ArrowRight />
			</span>
		</Link>
	)
}
