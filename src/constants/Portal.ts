'use client';
import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ChildrenWithProps } from '@/types/general';

type PortalTypes = ChildrenWithProps & {
	selector: string;
};

export const Portal = ({ children, selector }: PortalTypes) => {
	const refPortal = useRef<HTMLDialogElement | null>(null);
	const [isMounted, setMounted] = useState(false);
	useEffect(() => {
		refPortal.current = document.querySelector(selector);
		setMounted(true);
	}, [selector]);

	return isMounted ? createPortal(children, refPortal.current as HTMLDialogElement) : null;
};
