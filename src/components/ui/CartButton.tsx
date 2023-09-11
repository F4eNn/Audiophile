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
		<button onClick={openCart} className='fill-white p-3 transition-colors duration-300 hover:fill-primary'>
			<Cart />
		</button>
	);
};
