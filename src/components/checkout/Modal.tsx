import React from 'react';
import Image from 'next/image';

import { Portal } from '../ui/Portal';
import ConfirmationIcon from '../../../public/assets/checkout/icon-order-confirmation.svg';
import { LinkButton } from '../ui/LinkButton';
import { navigationPaths } from '@/constants/navigation';
import { useCartCtx } from '@/context/CartCtx';

export const ModalCheckout = () => {
	const { cart, grandTotal, setCart: removeCartItems, setTotalPrice } = useCartCtx();

	const handleCleanCart = () => {
		localStorage.setItem('cart', JSON.stringify([]));
		removeCartItems([]);
		setTotalPrice(0);
	};

	return (
		<Portal selector='#modal'>
			<div
				className='fixed bottom-0 left-0 top-[89px] z-50 flex  w-full   items-center justify-center overflow-auto bg-primaryDark/30 lg:top-0
            '
			>
				<div className='mx-3   flex w-full max-w-[600px] flex-col space-y-8 overflow-auto rounded-md bg-white p-8 py-12 sm:px-14 '>
					<div className='space-y-5'>
						<ConfirmationIcon />
						<h2 className=' text-H2  uppercase text-primaryDark'>
							thank you <br /> for your order
						</h2>
						<p className='text-brown'>You will receive an email confirmation shortly.</p>
					</div>
					<div className='flex flex-col items-stretch justify-center overflow-hidden rounded-lg sm:flex-row'>
						{cart.map(({ image, name, price, quantity }, idx) => {
							if (idx === 0) {
								return (
									<div key={idx} className='flex flex-col gap-2.5 bg-rose p-6 sm:w-2/3'>
										<div className='flex  items-center justify-between '>
											<div className='relative aspect-square w-14'>
												<Image src={image} alt={name} fill />
											</div>
											<div className='flex flex-col space-y-1'>
												<span className='font-bold text-primaryDark'>{name}</span>
												<span className='font-[600] text-brown'>$ {price.toLocaleString()}</span>
											</div>
											<span className='self-start font-[600] text-brown '>x{quantity}</span>
										</div>
										{cart.length > 1 ? (
											<>
												<hr className='border-veryLightPrimary' />
												<p className='align text-center  font-[600] text-brown'>and {cart.length - 1} other item(s)</p>
											</>
										) : null}
									</div>
								);
							}
						})}
						<div className='flex  flex-col  justify-center gap-2 bg-primaryDark  p-6 sm:w-1/3'>
							<h3 className='uppercase text-brown'>grand Total</h3>
							<p className='font-bold text-white'>$ {grandTotal}</p>
						</div>
					</div>
					<LinkButton onClick={handleCleanCart} href={navigationPaths.home.path} title='back to home' />
				</div>
			</div>
		</Portal>
	);
};
