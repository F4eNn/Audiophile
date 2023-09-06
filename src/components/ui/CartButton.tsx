import React from 'react'

import Cart from '../../../public//assets/icon-cart.svg'


export const CartButton = () => {
	return (
		<button className='fill-white p-3 hover:fill-primary transition-colors duration-300'>
			<Cart />
		</button>
	)
}
 