'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import ArrowRight from '../../../public/assets/icon-arrow-right.svg'
import { ThumbnailProps } from '@/constants/thumbnails'

export const CategoryItem = ({ src, title, path }: ThumbnailProps) => {
	const pathname = usePathname()
	return (
		<Link
			href={path}
			className={`group relative ${
				pathname === path ? 'scale-110 bg-secondary text-white' : 'bg-rose'
			}  mx-auto h-40 w-full max-w-xs rounded-lg  pt-16 transition-all duration-300 hover:scale-110`}
		>
			<div className='absolute bottom-[75px] left-1/2 aspect-square w-[150px] -translate-x-1/2'>
				<Image src={src} fill alt='product thumbnail' />
			</div>
			<h3 className='mt-5 text-center text-H6 uppercase'>{title}</h3>
			<span
				className={`${
					pathname === path ? 'group-hover:text-white' : ''
				} colors-300 mt-3.5 flex items-center justify-center gap-3 font-[500] uppercase text-lightBrown group-hover:text-primary`}
			>
				shop <ArrowRight />
			</span>
		</Link>
	)
}
