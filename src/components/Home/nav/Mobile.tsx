import React, { useRef, MouseEvent, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';

import { CategoryItem } from '../../ui/CategoryItem';
import { thumbnails } from '@/constants/thumbnails';
import { Logo } from '@/components/ui/Logo';
import { CartButton } from '@/components/ui/CartButton';
import { animateMobileMenu, animateMobileNav } from '@/animations/animation';
import { DispatchAction } from '@/types/general';

interface MobileMenuProps {
	setIsOpen: DispatchAction<boolean>;
	isOpen: boolean;
	isScroll: boolean;
	setCart: () => void;
}

export const MobileMenu = ({ isOpen, setIsOpen, isScroll, setCart }: MobileMenuProps) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLLIElement>(null);
	const hamburgerRef = useRef<HTMLLIElement>(null);
	const cartRef = useRef<HTMLLIElement>(null);

	const handleOverlayClose = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) setIsOpen(false);
	};
	const showNav = (open: boolean) => {
		animateMobileMenu(overlayRef, open);
	};

	useEffect(() => {
		if (!isOpen) {
			showNav(false);
			document.body.classList.remove('overflow-hidden');
		} else {
			showNav(true);
			document.body.classList.add('overflow-hidden');
		}
	}, [isOpen]);

	useEffect(() => {
		animateMobileNav(hamburgerRef, logoRef, cartRef);
	}, []);

	return (
		<div
			className={`mx-3  overflow-hidden  border-b-[1px] ${
				isScroll ? 'border-primaryDark' : 'border-darkGray'
			} py-5    md:mx-5 md:hidden md:py-7`}
		>
			<ul className='flex  items-center  justify-between  '>
				<li ref={hamburgerRef} className='opacity-0'>
					<Hamburger toggle={setIsOpen} toggled={isOpen} />
				</li>
				<li ref={logoRef} className='opacity-0'>
					<Logo />
				</li>
				<li ref={cartRef} className='opacity-0'>
					<CartButton toggleCart={setCart} />
				</li>
			</ul>
			<div
				ref={overlayRef}
				onClick={handleOverlayClose}
				className='fixed bottom-0 left-0 -z-50 h-0 w-full overflow-auto  bg-primaryDark/70'
			>
				<div className=' flex  w-full flex-row flex-wrap gap-x-6 gap-y-20 rounded-b-lg bg-white px-5 pb-10 pt-24 text-primaryDark'>
					{thumbnails.map((items, index) => (
						<CategoryItem key={index} {...items} />
					))}
				</div>
			</div>
		</div>
	);
};
