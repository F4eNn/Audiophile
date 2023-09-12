import React from 'react';
import Image from 'next/image';

import { useCartCtx } from '@/context/CartCtx';
import { Wrapper } from '@/components/ui/Wrapper';
import { QuantityInput } from '@/components/ui/QuantityInput';
import { OverlayCart } from './Overlay';

type CartProps = {
	isCartOpen: boolean;
	setCart: () => void;
};

export const Cart = ({ isCartOpen, setCart }: CartProps) => {
	const { cart, setCart: removeCartItems } = useCartCtx();

	const handleRemoveAll = () => {
		localStorage.setItem('cart', JSON.stringify([]));
		removeCartItems([]);
	};

	return (
		<Wrapper>
			{/* <div onClick={overlayClose} ref={overlayRef} className='fixed inset-0 left-full -z-10 bg-primaryDark/50'></div> */}
			<OverlayCart setCart={setCart} isOpen={isCartOpen} />
			<div className=' absolute right-0 ml-auto mt-[20px] flex h-[500px] w-[375px]  scale-0 flex-col justify-between rounded-lg   bg-white p-8 text-primaryDark opacity-0 '>
				<div className='flex justify-between'>
					<h3 className='text-H5'>{`Cart (${cart.length})`}</h3>
					<button onClick={handleRemoveAll} className='underline'>
						Remove all
					</button>
				</div>
				<div className='cartScrollTrack cartScrollThumb cartScroll h-[300px] overflow-auto pr-3'>
					{cart.map(({ image, name, price, quantity }, idx) => {
						return (
							<div key={name + idx} className='my-7 flex items-center justify-between text-primaryDark'>
								<div className='flex items-center gap-3'>
									<div className='relative aspect-square w-[64px] '>
										<Image src={image} fill alt={name} className='rounded-lg' />
									</div>
									<div className='flex flex-col'>
										<span>{name}</span>
										<span className='text-brown'>${price}</span>
									</div>
								</div>
								<div>
									<QuantityInput productQuantity={quantity} px='px-3' py='py-0' pInput='p-1.5' />
								</div>
							</div>
						);
					})}
				</div>
				<div>
					<p className='flex justify-between'>
						<span className='uppercase text-brown'>Total</span>
						<span className='font-bold'>{`$ 5,396`}</span>
					</p>
					<button className='colors-300 w-full bg-primary py-2 uppercase text-white hover:bg-secondary'>
						Checkout
					</button>
				</div>
			</div>
		</Wrapper>
	);
};
