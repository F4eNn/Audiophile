'use client';
import React, { useRef, MouseEvent, useEffect } from 'react';

import { initCartAnimation, toggleCartAnimation } from '@/animations/animation';

type CartProps = {
	isCartOpen: boolean;
	setCart: () => void;
};

export const Cart = ({ isCartOpen, setCart }: CartProps) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const tl = useRef<Timeline>();

	const overlayClose = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) setCart();
	};

	useEffect(() => {
		initCartAnimation(overlayRef, tl);
	}, []);
	useEffect(() => {
		toggleCartAnimation(isCartOpen, tl);
	}, [isCartOpen]);

	return (
		<div onClick={overlayClose} ref={overlayRef} className='fixed inset-0 left-full -z-10 bg-primaryDark/50'>
			<div className=' ml-auto mr-[250px] mt-[125px] h-[500px] w-max rounded-lg bg-white p-8 text-primaryDark'>
				<div className='flex justify-between'>
					<h3 className='text-H5'>{`Cart (3)`}</h3>
					<button>Remove all</button>
				</div>
				<div></div>
				<p className='flex justify-between'>
					<span className='text-brown'>Total</span>
					<span className='font-bold'>{`$ 5,396`}</span>
				</p>
				<button className='colors-300 w-full bg-primary py-2 uppercase text-white hover:bg-secondary'>Checkout</button>
			</div>
		</div>
	);
};
