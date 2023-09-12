import React from 'react';

import Cart from '../../../public//assets/icon-cart.svg';

type CartButtonProps = {
	toggleCart: () => void;
};

export const CartButton = ({ toggleCart }: CartButtonProps) => {
	const openCart = () => {
		toggleCart();
	};
	return (
		<button onClick={openCart} className='relative fill-white p-3 transition-colors duration-300 hover:fill-primary'>
			<span className='absolute right-1 top-0 h-[22px] w-[22px] rounded-full bg-primary text-sm font-bold'>22</span>
			<Cart />
		</button>
	);
};
