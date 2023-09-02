'use client'
import React, { useState } from 'react'

import { MobileMenu } from './Mobile'
import { Desktop } from './Desktop'

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav
			className={` fixed top-0 z-10 w-full text-white transition-colors duration-200
		${isOpen ? 'bg-primaryDark' : 'bg-transparent'}
		`}
		>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
			<Desktop />
		</nav>
	)
}
