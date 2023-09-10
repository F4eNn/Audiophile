'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

import { desktopNav } from '@/constants/navigation';

export const FooterNav = () => {
	const pathname = usePathname();
	return (
		<ul className=' flex flex-col items-center gap-6  text-sm font-[500] uppercase tracking-widest sm:flex-row   sm:gap-5 lg:text-base'>
			{desktopNav.map(([url, title]) => (
				<li
					className={` w-full transition-colors duration-300 ${
						pathname === url ? 'text-primary' : ''
					} hover:text-primary sm:w-max `}
					key={title}
				>
					<Link className='inline-block  w-full  p-2' href={url}>
						{title}
					</Link>
				</li>
			))}
		</ul>
	);
};
