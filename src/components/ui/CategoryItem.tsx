import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ArrowRight from '../../../public/assets/icon-arrow-right.svg'

interface MobileProps {
	src: string
}

export const CategoryItem = ({ src }: MobileProps) => {
	return (
		<li className='group relative mx-auto h-40 w-full max-w-xs rounded-lg bg-rose pt-16 '>
			<Link href='/'>
				<Image
					src={src}
					width={150}
					height={150}
					alt='product thumbnail'
					className='absolute bottom-[75px] left-1/2 -translate-x-1/2'
				/>
				<h3 className='mt-5 text-center text-H6 uppercase'>Headphones</h3>
				<span className='mt-3.5 flex items-center justify-center gap-3 font-[500] uppercase text-lightBrown transition-colors duration-300 group-hover:text-primary'>
					shop <ArrowRight />
				</span>
			</Link>
		</li>
	)
}
