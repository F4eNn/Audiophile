import React from 'react';

import { useCartCtx } from '@/context/CartCtx';
import { Wrapper } from '@/components/ui/Wrapper';
import { OverlayCart } from './Overlay';
import { Items } from './Items';
type CartProps = {
	isCartOpen: boolean;
	setCart: () => void;
};

export const Cart = ({ isCartOpen, setCart }: CartProps) => {
	const { cart, setCart: removeCartItems, totalPrice, setTotalPrice } = useCartCtx();

	const handleRemoveAll = () => {
		localStorage.setItem('cart', JSON.stringify([]));
		removeCartItems([]);
		setTotalPrice('0');
	};

	return (
		<Wrapper>
			<OverlayCart setCart={setCart} isOpen={isCartOpen} />
			<div className=' absolute right-0 ml-auto mr-3 mt-[20px] flex h-[500px] w-[325px] scale-0 flex-col justify-between rounded-lg bg-white px-5  py-8 text-primaryDark opacity-0 sm:mr-10 sm:w-[425px] sm:p-8 '>
				<div className='flex justify-between'>
					<h3 className='text-H5'>{`Cart (${cart.length})`}</h3>
					<button onClick={handleRemoveAll} className='underline'>
						Remove all
					</button>
				</div>
				<div
					className={`cartScrollTrack cartScrollThumb cartScroll h-[425px] overflow-auto  ${
						cart.length >= 4 ? 'pr-3' : ''
					}`}
				>
					<Items cart={cart} />
				</div>
				<div className='space-y-5'>
					<p className='flex justify-between'>
						<span className='uppercase text-brown'>Total</span>
						<span className='font-bold'>$ {totalPrice}</span>
					</p>
					<button className='colors-300 w-full bg-primary py-2 uppercase text-white hover:bg-secondary'>
						Checkout
					</button>
				</div>
			</div>
		</Wrapper>
	);
};
