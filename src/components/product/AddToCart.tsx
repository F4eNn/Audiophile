'use client';
import React, { useState } from 'react';

import { CartTypes, useCartCtx } from '@/context/CartCtx';

export const AddToCart = ({ image, price, name }: Partial<CartTypes>) => {
	const [quantity, setQuantity] = useState(1);
	const [delay, setDelay] = useState(true);
	const incrementQuantity = () => setQuantity(prev => prev + 1);
	const decrementQuantity = () => setQuantity(prev => prev - 1);

	const { addToCart: addProductToCart } = useCartCtx();

	const createShorterName = () => {
		const splitName = name!.split(' ');
		const removeDeviceName = ['Headphones', 'Speaker', 'Earphones', 'Wireless'];
		const shorterName = splitName.filter(p => !removeDeviceName.includes(p));

		return shorterName.join(' ');
	};

	const addToCart = () => {
		const shorterName = createShorterName();
		if (delay) {
			setDelay(false);
			setTimeout(() => {
				addProductToCart({ image: image!, name: shorterName, price: price!, quantity });
				setDelay(true);
			}, 400);
		}
	};

	return (
		<div className='flex gap-4'>
			<div className='w-max bg-rose'>
				<button
					onClick={decrementQuantity}
					type='button'
					className='colors-300 p-2.5  px-3 text-lg text-brown hover:text-primary disabled:cursor-not-allowed disabled:hover:text-brown'
					disabled={quantity <= 1}
				>
					-
				</button>
				<input
					type='number'
					className='input pointer-events-none border-none bg-rose text-center font-bold focus:outline-0 focus:ring-0'
					value={quantity}
					min={1}
					tabIndex={-1}
					max={99}
					readOnly
				/>
				<button
					onClick={incrementQuantity}
					type='button'
					className='colors-300 p-2.5 px-3 text-lg text-brown hover:text-primary disabled:cursor-not-allowed disabled:hover:text-brown '
					disabled={quantity >= 99}
				>
					+
				</button>
			</div>

			<button
				onClick={addToCart}
				className='colors-300 min-w-max max-w-[175px] flex-1 bg-primary px-6 uppercase text-white  hover:bg-secondary'
			>
				add to cart
			</button>
		</div>
	);
};
