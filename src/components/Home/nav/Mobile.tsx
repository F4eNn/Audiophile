'use client'
import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'

import Logo from '../../../../public/assets/logo.svg'
import Cart from '../../../../public/assets/icon-cart.svg'
import { MobileNavItem } from './MobileNavItem'

export const MobileMenu = () => {
	const [isOpen, toggle] = useState(false)

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
				<div className='fixed inset-0 -z-20  bg-secondaryDark/40'>
					<div className='flex pb-10 w-full flex-row flex-wrap gap-y-20 rounded-b-lg bg-white px-5 pt-44 text-primaryDark'>
						<MobileNavItem />
						<MobileNavItem />
						<MobileNavItem />
					</div>
				</div>
			)}
		</>
	)
}
