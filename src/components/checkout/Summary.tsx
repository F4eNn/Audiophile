import React from 'react';

import { Items } from '../Home/nav/cart/Items';
import { useCartCtx } from '@/context/CartCtx';

export const Summary = () => {
	const { cart, totalPrice } = useCartCtx();
	const formatedTotalPrice = totalPrice.toLocaleString();

	const shippingCost = 50;
	const vatPercantage = 0.2;

	const vat = Number((totalPrice * vatPercantage).toFixed());
	const formatedVat = vat.toLocaleString();
	const grandTotal = (vat + totalPrice + shippingCost).toLocaleString();

	return (
		<div>
			<div
				className={`cartScrollTrack cartScrollThumb cartScroll h-full max-h-[400px] ${
					cart.length >= 4 ? 'pr-4' : ''
				} overflow-auto`}
			>
				<Items cart={cart} isSummary={true} />
			</div>
			<div className='mb-5 mt-4 flex flex-col gap-3 text-sm font-[500] uppercase text-brown'>
				<p className='flex items-center justify-between'>
					Total
					<span className='font-bold text-primaryDark'> $ {formatedTotalPrice}</span>
				</p>
				<p className='flex items-center justify-between'>
					Shipping
					<span className='font-bold text-primaryDark'>$ {shippingCost}</span>
				</p>
				<p className='flex items-center justify-between'>
					Vat (included)
					<span className='font-bold text-primaryDark'> $ {formatedVat}</span>
				</p>
				<p className='mt-3  flex items-center justify-between'>
					grand total
					<span className='font-bold text-primary'> $ {grandTotal}</span>
				</p>
			</div>
		</div>
	);
};
