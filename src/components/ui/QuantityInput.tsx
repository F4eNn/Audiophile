'use client';
import React, { useState, forwardRef, ForwardedRef, useEffect } from 'react';

import { useCartCtx } from '@/context/CartCtx';

type QuantityInputProps = {
	productQuantity?: number;
	py?: string;
	px?: string;
	pInput?: string;
	idx?: number;
	isChangeQuantity?: boolean;
};

export const QuantityInput = forwardRef(
	(
		{ productQuantity = 1, px = 'px-3', py = 'py-2.5', pInput, idx, isChangeQuantity = false }: QuantityInputProps,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const { setDecrementQuantity, setIncremenetQuantity } = useCartCtx();

		const [quantity, setQuantity] = useState(productQuantity);

		const incrementQuantity = () => {
			setQuantity(prev => prev + 1);
			if (isChangeQuantity) {
				setIncremenetQuantity({ idx: idx!, isChange: true });
			}
		};
		const decrementQuantity = () => {
			setQuantity(prev => prev - 1);
			if (isChangeQuantity) {
				setDecrementQuantity({ idx: idx!, isChange: true });
			}
		};

		useEffect(() => {
			setQuantity(productQuantity);
		}, [productQuantity]);

		return (
			<div className='w-max bg-rose'>
				<button
					onClick={decrementQuantity}
					type='button'
					className={`colors-300 ${py}  ${px} text-lg text-brown hover:text-primary disabled:cursor-not-allowed disabled:hover:text-brown`}
					disabled={quantity <= 1}
				>
					-
				</button>
				<input
					ref={ref}
					type='number'
					className={`input pointer-events-none border-none bg-rose ${pInput}   text-center  font-bold focus:outline-0 focus:ring-0`}
					value={quantity}
					min={1}
					tabIndex={-1}
					max={99}
					readOnly
				/>
				<button
					onClick={incrementQuantity}
					type='button'
					className={`colors-300 ${py} ${px} text-lg text-brown hover:text-primary disabled:cursor-not-allowed disabled:hover:text-brown `}
					disabled={quantity >= 99}
				>
					+
				</button>
			</div>
		);
	},
);

QuantityInput.displayName = 'Quantity Input';
