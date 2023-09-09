'use client'
import React, { useRef } from 'react'
import gsap from 'gsap'
import {usePathname} from 'next/navigation'

import { ChildrenWithProps } from '@/types/general'
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import { animateSection } from '@/animations/animation'

type AnimateSectionProps = ChildrenWithProps & { start?: string }

export const AnimateSection = ({ children, start }: AnimateSectionProps) => {
	const sectionRef = useRef<HTMLDivElement>(null)
	
	const pathname = usePathname()

	useIsomorphicLayoutEffect(() => {
		const ctx = gsap.context(() => {
			animateSection(sectionRef, start)
		})
		return () => ctx.revert()
	}, [pathname])

	return <div ref={sectionRef}>{children}</div>
}
