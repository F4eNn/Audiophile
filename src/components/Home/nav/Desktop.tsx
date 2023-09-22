import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Wrapper } from '@/components/ui/Wrapper';
import { Logo } from '@/components/ui/Logo';
import { CartButton } from '@/components/ui/CartButton';
import { animateDesktopNav } from '@/animations/animation';
import { defaultPaths, desktopNav } from '@/constants/navigation';
import { AccountNav } from './AccountNav';

interface DesktopProps {
	isScroll: boolean;
	setCart: () => void;
}

export const Desktop = ({ isScroll, setCart }: DesktopProps) => {
	const desktopNavRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		animateDesktopNav(desktopNavRef);
	}, []);

	const pathname = usePathname();

	return (
		<Wrapper>
			<div
				ref={desktopNavRef}
				className={` mx-5 hidden  scale-0 items-center justify-between border-b-[1px] transition-all duration-500   ${
					isScroll || !defaultPaths.includes(pathname) ? 'border-primaryDark py-4 ' : 'border-darkGray py-7 '
				} opacity-0 md:flex lg:mx-7  `}
			>
				<span>
					<Logo />
				</span>
				<ul className='-ml-[5%] flex items-center gap-7 text-sm font-[500] uppercase tracking-widest lg:-ml-[15%] lg:gap-10 lg:text-base'>
					{desktopNav.map(([url, title]) => (
						<li
							className={`desktopLink transition-colors duration-300 hover:text-primary ${
								pathname === url ? 'text-primary' : ''
							} `}
							key={title}
						>
							<Link className='p-2' href={url}>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<div className='flex items-center gap-5'>
					<CartButton toggleCart={setCart} />
					<AccountNav />
				</div>
			</div>
		</Wrapper>
	);
};
