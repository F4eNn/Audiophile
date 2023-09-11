'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { MobileMenu } from './Mobile';
import { Desktop } from './Desktop';
import { defaultPaths } from '@/constants/navigation';
import { Cart } from '@/components/Home/nav/Cart';
import { useToggle } from '@/hooks/useToggle';

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isCartOpen, toggleCart] = useToggle();

	const [isScroll, setIsScroll] = useState(false);
	const pathname = usePathname();

	const handleScroll = () => {
		if (scrollY >= 101) {
			setIsScroll(true);
		} else {
			setIsScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<nav
			className={` fixed top-0 z-[50] ${
				isScroll || !defaultPaths.includes(pathname) ? 'bg-primaryDark' : 'bg-transparent'
			}   w-full text-white transition-colors duration-200
		${isOpen ? 'bg-primaryDark' : 'bg-transparent'}
		`}
		>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} isScroll={isScroll} setCart={toggleCart} />
			<Desktop isScroll={isScroll} setCart={toggleCart} />
			<Cart isCartOpen={isCartOpen} setCart={toggleCart} />
		</nav>
	);
};
