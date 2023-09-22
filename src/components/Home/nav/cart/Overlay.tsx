import React, { MouseEvent, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { initCartAnimation, toggleCartAnimation } from '@/animations/animation';

type OverlayCartProps = {
	isOpen: boolean;
	setCart: () => void;
};

export const OverlayCart = ({ isOpen, setCart }: OverlayCartProps) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const tl = useRef<Timeline>();
	const pathname = usePathname();

	const overlayClose = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) setCart();
	};

	useEffect(() => {
		initCartAnimation(overlayRef, tl);
	}, []);

	useEffect(() => {
		toggleCartAnimation(isOpen, tl);
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) setCart();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return <div onClick={overlayClose} ref={overlayRef} className='fixed inset-0 left-full -z-10 bg-primaryDark/50' />;
};
