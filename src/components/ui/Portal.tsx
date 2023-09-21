'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ChildrenWithProps } from '@/types/general';

type PortalTypes = ChildrenWithProps & {
	selector: string;
};

export const Portal = ({ children, selector }: PortalTypes) => {
	const [isMounted, setIsMounted] = useState(false);
	const refPortal = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setIsMounted(true);
		refPortal.current = document.querySelector(selector);
		return () => setIsMounted(false);
	}, [selector]);

	return isMounted ? createPortal(children, refPortal.current as HTMLDivElement) : null;
};
