import React, { useEffect, useRef } from 'react'
import Link from 'next/link'


import { Wrapper } from '@/components/ui/Wrapper'
import { Logo } from '@/components/ui/Logo'
import { CartButton } from '@/components/ui/CartButton'
import { animateDesktopNav } from '@/animations/animation'
import { desktopNav } from '@/constants/navigation'

interface DesktopProps {
	isScroll: boolean
}

export const Desktop = ({isScroll}: DesktopProps) => {
	

	const desktopNavRef = useRef<HTMLDivElement>(null)
	
	useEffect(() => {
		animateDesktopNav(desktopNavRef)
	}, [])

	return (
		<Wrapper>
			<div
				ref={desktopNavRef}
				className={` mx-5 hidden  scale-0 items-center justify-between border-b-[1px] transition-all duration-500   ${isScroll ? 'py-4 border-primaryDark': 'py-7 border-darkGray '} opacity-0 md:flex lg:mx-7  `}
			>
				<span>
					<Logo />
				</span>
				<ul className='-ml-[5%] flex items-center gap-7 text-sm font-[500] uppercase tracking-widest lg:-ml-[15%] lg:gap-10 lg:text-base'>
					{desktopNav.map(([url, title]) => (
						<li className='desktopLink transition-colors duration-300 hover:text-primary ' key={title}>
							<Link className='p-2' href={url}>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<CartButton />
			</div>
		</Wrapper>
	)
}
