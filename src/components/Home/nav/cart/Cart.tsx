import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useCartCtx } from '@/context/CartCtx';
import { Wrapper } from '@/components/ui/Wrapper';
import { OverlayCart } from './Overlay';
import { Items } from './Items';
import { navigationPaths } from '@/constants/navigation';
type CartProps = {
	isCartOpen: boolean;
	setCart: () => void;
};

export const Cart = ({ isCartOpen, setCart }: CartProps) => {
	const { cart, setCart: removeCartItems, totalPrice, setTotalPrice } = useCartCtx();
	const [isCartEmpty, setIsCartEmpty] = useState(false);
	const { push } = useRouter();
	const handleRemoveAll = () => {
		localStorage.setItem('cart', JSON.stringify([]));
		removeCartItems([]);
		setTotalPrice('0');
	};

	const goToCheckout = () => {
		if (cart.length !== 0) {
			setIsCartEmpty(false);
			push(navigationPaths.checkout.path);
		} else {
			setIsCartEmpty(true);
		}
	};
	useEffect(() => {
		if (!isCartOpen) setIsCartEmpty(false);
	}, [isCartOpen]);

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
					<div className='relative'>
						<button
							onClick={goToCheckout}
							className='colors-300 w-full bg-primary py-2 uppercase text-white hover:bg-secondary'
						>
							Checkout
						</button>
						{isCartEmpty ? (
							<p className='absolute -top-8 left-1/2 -translate-x-1/2 text-center text-sm font-[600] text-primary'>
								Cart is Empty
							</p>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};
