'use client';
import React, { useRef, MouseEvent, useEffect } from 'react';
import Image from 'next/image';

import { initCartAnimation, toggleCartAnimation } from '@/animations/animation';
import { useCartCtx } from '@/context/CartCtx';
import { Wrapper } from '@/components/ui/Wrapper';

type CartProps = {
	isCartOpen: boolean;
	setCart: () => void;
};

export const Cart = ({ isCartOpen, setCart }: CartProps) => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const tl = useRef<Timeline>();

	const { cart } = useCartCtx();

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
		<Wrapper>
			<div onClick={overlayClose} ref={overlayRef} className='fixed inset-0 left-full -z-10 bg-primaryDark/50'></div>
			<div className=' absolute right-0 ml-auto mt-[20px]  h-[500px] w-[375px] scale-0 rounded-lg   bg-white p-8 text-primaryDark opacity-0 '>
				<div className='flex justify-between'>
					<h3 className='text-H5'>{`Cart (3)`}</h3>
					<button className='underline'>Remove all</button>
				</div>
				{cart.map(({ image, name, price, quantity }, idx) => (
					<div key={name + idx} className='flex items-center text-primaryDark'>
						<div className='flex items-center gap-3'>
							<div className='relative aspect-square  w-[64px] '>
								<Image src={image} fill alt={name} className='rounded-lg' />
							</div>
							<div className='flex flex-col'>
								<span>{name}</span>
								<span className='text-brown'>${price}</span>
							</div>
						</div>
						<div></div>
					</div>
				))}
				<p className='flex justify-between'>
					<span className='uppercase text-brown'>Total</span>
					<span className='font-bold'>{`$ 5,396`}</span>
				</p>
				<button className='colors-300 w-full bg-primary py-2 uppercase text-white hover:bg-secondary'>Checkout</button>
			</div>
		</Wrapper>
	);
};
