import Image from 'next/image';
import React from 'react';
import Lottie from 'lottie-react';

import { QuantityInput } from '@/components/ui/QuantityInput';
import { CartTypes } from '@/context/CartCtx';
import emptyCartAnimation from '../../../../../public/animation_lmhnhdpl.json';

export const Items = ({ cart }: { cart: CartTypes[] }) => {
	return (
		<>
			{cart.length !== 0 ? (
				<>
					{cart.map(({ image, name, price, quantity }, idx) => {
						return (
							<div key={name + idx} className='my-7 flex items-center justify-between text-primaryDark'>
								<div className='flex items-center gap-3'>
									<div className='relative aspect-square w-[64px] '>
										<Image src={image} fill alt={name} className='rounded-lg' />
									</div>
									<div className='flex flex-col'>
										<span className='text-sm font-bold'>{name}</span>
										<span className='text-brown'>${price}</span>
									</div>
								</div>
								<div>
									<QuantityInput productQuantity={quantity} px='px-3' py='py-0' pInput='p-1.5' />
								</div>
							</div>
						);
					})}
				</>
			) : (
				<Lottie animationData={emptyCartAnimation} style={{ height: '320px' }} />
			)}
		</>
	);
};
