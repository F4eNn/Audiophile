'use client'
import React, { useRef } from 'react'

import { ChildrenWithProps } from '@/types/general'
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import { animateSection } from '@/animations/animation'

export const AnimateSection = ({ children }: ChildrenWithProps) => {
	const sectionRef = useRef<HTMLDivElement>(null)
	useIsomorphicLayoutEffect(() => {
		animateSection(sectionRef)
	}, [])

	return <div ref={sectionRef}>{children}</div>
}
