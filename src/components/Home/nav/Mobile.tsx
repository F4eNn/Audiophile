'use client'
import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

import Logo from '../../../../public/assets/logo.svg'
import Cart from '../../../../public/assets/icon-cart.svg'
import { MobileNavItem } from './MobileNavItem'

export const MobileMenu = () => {
	const [isOpen, toggle] = useState(false)

	const thumbnails = [
		'/assets/image-category-thumbnail-headphones.png',
		'/assets/image-category-thumbnail-speakers.png',
		'/assets/image-category-thumbnail-earphones.png',
	]

	return (
		<>
			<ul className='flex items-center justify-between '>
				<li>
					<Hamburger toggle={toggle} toggled={isOpen} />
				</li>
				<li>
					<Logo />
				</li>
				<li>
					<button>
						<Cart />
					</button>
				</li>
			</ul>
			{isOpen && (
				<div className='absolute inset-0 -z-20  bg-secondaryDark/40'>
					<div className='flex w-full flex-row flex-wrap gap-y-20 rounded-b-lg bg-white px-5 pb-10 pt-44 text-primaryDark'>
						{thumbnails.map((src, index) => (
							<MobileNavItem key={index} src={src} />
						))}
					</div>
				</div>
			)}
		</>
	)
}
