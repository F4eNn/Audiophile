import React, { MouseEvent, useEffect, useRef } from 'react';

import { initCartAnimation, toggleCartAnimation } from '@/animations/animation';

type OverlayCartProps = {
	isOpen: boolean;
	setCart: () => void;
};

export const OverlayCart = ({ isOpen, setCart }: OverlayCartProps) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const tl = useRef<Timeline>();

	const overlayClose = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) setCart();
	};

	useEffect(() => {
		initCartAnimation(overlayRef, tl);
	}, []);

	useEffect(() => {
		toggleCartAnimation(isOpen, tl);
	}, [isOpen]);

	return <div onClick={overlayClose} ref={overlayRef} className='fixed inset-0 left-full -z-10 bg-primaryDark/50' />;
};
