'use client'
import React, {useRef} from 'react'

import { ChildrenWithProps } from '@/types/general'
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import { animateHeroSection } from '@/animations/animation'



export const HeroSectionWrapper = ({ children }: ChildrenWithProps) => {

	const sectionRef = useRef<HTMLDivElement>(null)

	useIsomorphicLayoutEffect(() => {
		animateHeroSection(sectionRef)
	}, [])
	
	return <div ref={sectionRef} className='opacity-0'>{children}</div>
}
