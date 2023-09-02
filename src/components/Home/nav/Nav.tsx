'use client'
import React, { useState } from 'react'

import { MobileMenu } from './Mobile'

export const Nav = () => {
	const [isOpen, toggle] = useState(false)

	return (
		<nav
			className={`border-gray absolute top-0 z-10 w-full border-b-[1px] p-3.5 py-6 text-white transition-colors duration-200
		${isOpen ? 'bg-primaryDark' : 'bg-transparent'}
		`}
		>
			<MobileMenu isOpen={isOpen} toggle={toggle} />
		</nav>
	)
}
