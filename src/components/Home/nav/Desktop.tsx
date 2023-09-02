import React from 'react'
import Link from 'next/link'

import Logo from '../../../../public/assets/logo.svg'
import Cart from '../../../../public/assets/icon-cart.svg'
import { Wrapper } from '@/components/ui/Wrapper'

export const Desktop = () => {
	const desktopNav = [
		['/', 'home'],
		['/', 'headphones'],
		['/', 'speakers'],
		['/', 'earphones'],
	]
	return (
		<Wrapper>
			<div className=' border-darkGray mx-5 hidden items-center justify-between border-b-[1px] py-10 md:flex lg:mx-7  '>
				<span>
					<Logo />
				</span>
				<ul className='-ml-[5%] flex items-center gap-7 font-[500] uppercase tracking-widest lg:-ml-[15%] lg:gap-10'>
					{desktopNav.map(([url, title]) => (
						<li className='transition-colors duration-300 hover:text-primary ' key={title}>
							<Link className='p-2' href={url}>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<button>
					<Cart />
				</button>
			</div>
		</Wrapper>
	)
}
