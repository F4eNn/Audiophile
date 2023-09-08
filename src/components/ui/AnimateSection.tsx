'use client'
import React, { useRef } from 'react'

import { ChildrenWithProps } from '@/types/general'
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicLayoutEffect'
import { animateSection } from '@/animations/animation'

type AnimateSectionProps = ChildrenWithProps & { start?: string }

export const AnimateSection = ({ children, start }: AnimateSectionProps) => {
	const sectionRef = useRef<HTMLDivElement>(null)
	useIsomorphicLayoutEffect(() => {
		animateSection(sectionRef, start)
	}, [])

	return <div ref={sectionRef}>{children}</div>
}
