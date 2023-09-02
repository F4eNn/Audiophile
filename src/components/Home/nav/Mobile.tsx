import React, { type Dispatch, SetStateAction, useRef, MouseEvent } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

import Logo from '../../../../public/assets/logo.svg'
import Cart from '../../../../public/assets/icon-cart.svg'
import { MobileNavItem } from './MobileNavItem'

interface MobileMenuProps {
	setIsOpen: Dispatch<SetStateAction<boolean>>
	isOpen: boolean
}

export const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
	const thumbnails = [
		'/assets/image-category-thumbnail-headphones.png',
		'/assets/image-category-thumbnail-speakers.png',
		'/assets/image-category-thumbnail-earphones.png',
	]
	const overlayRef = useRef<HTMLDivElement>(null)

	const handleOverlayClose = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) setIsOpen(false)
	}

	return (
		<div className='border-darkGray mx-3 border-b-[1px] py-5 md:mx-5 md:hidden md:py-7'>
			<ul className=' flex items-center justify-between'>
				<li>
					<Hamburger toggle={setIsOpen} toggled={isOpen} />
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
				<div
					ref={overlayRef}
					onClick={handleOverlayClose}
					className='fixed bottom-0 left-0 -z-50 h-[calc(100%-89px)] w-full overflow-auto  bg-primaryDark/40'
				>
					<div className=' flex  w-full flex-row flex-wrap gap-y-20  rounded-b-lg bg-white px-5 pb-10 pt-24 text-primaryDark'>
						{thumbnails.map((src, index) => (
							<MobileNavItem key={index} src={src} />
						))}
					</div>
				</div>
			)}
		</div>
	)
}
