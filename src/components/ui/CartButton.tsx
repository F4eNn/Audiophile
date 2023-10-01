import React, { useEffect, useRef } from 'react';

import Cart from '../../../public//assets/icon-cart.svg';
import { useCartCtx } from '@/context/CartCtx';
import { addToCartAnimation } from '@/animations/animation';

type CartButtonProps = {
	toggleCart: () => void;
};

export const CartButton = ({ toggleCart }: CartButtonProps) => {
	const { cart, isAdd, itemsInCart } = useCartCtx();
	const cartBtnRef = useRef<HTMLButtonElement>(null);
	const openCart = () => {
		toggleCart();
	};
	useEffect(() => {
		if (isAdd) {
			addToCartAnimation(cartBtnRef);
		}
	}, [isAdd]);
	return (
		<button
			ref={cartBtnRef}
			onClick={openCart}
			className='relative fill-white p-3 transition-colors duration-300 hover:fill-primary'
		>
			{cart.length !== 0 && (
				<span className='absolute right-0 top-0 flex min-h-[22px] min-w-[22px] items-center  justify-center rounded-full bg-primary px-1 text-sm font-bold'>
					{itemsInCart}
				</span>
			)}
			<Cart />
		</button>
	);
};
