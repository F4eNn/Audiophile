import React, { type Dispatch, SetStateAction } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

import Logo from '../../../../public/assets/logo.svg'
import Cart from '../../../../public/assets/icon-cart.svg'
import { MobileNavItem } from './MobileNavItem'

interface MobileMenuProps {
	toggle: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
}

export const MobileMenu = ({ isOpen, toggle }: MobileMenuProps) => {
	
	const thumbnails = [
		'/assets/image-category-thumbnail-headphones.png',
		'/assets/image-category-thumbnail-speakers.png',
		'/assets/image-category-thumbnail-earphones.png',
	]

	return (
		<>
			<ul className=' flex items-center justify-between'>
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
				<div className='absolute z-20 left-0 right-0 x top-[76px] bg-primary/40'>
					<div className='  flex w-full flex-row flex-wrap gap-y-20 rounded-b-lg bg-white px-5 pb-10 pt-24 text-primaryDark'>
						{thumbnails.map((src, index) => (
							<MobileNavItem key={index} src={src} />
						))}
					</div>
				</div>
			)}
		</>
	)
}
