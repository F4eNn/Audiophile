'use client'
import React, { useEffect, useState } from 'react'

import { MobileMenu } from './Mobile'
import { Desktop } from './Desktop'

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isScroll, setIsScroll] = useState(false)

	const handleScroll = () => {
		if (scrollY >= 101) {
			setIsScroll(true)
		} else {
			setIsScroll(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={` fixed top-0 z-10 ${
				isScroll ? 'bg-primaryDark' : 'bg-transparent'
			}   w-full text-white transition-colors duration-200
		${isOpen ? 'bg-primaryDark' : 'bg-transparent'}
		`}
		>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} isScroll={isScroll} />
			<Desktop isScroll={isScroll} />
		</nav>
	)
}
