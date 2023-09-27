import Image from 'next/image';
import React from 'react';

export const PurchaseHistory = () => {
	return (
		<>
			<h2 className='my-5 text-H3'>Purchase History</h2>
			<div className='my-10 rounded-md bg-white p-10'>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-1 items-center gap-5'>
						<div className='relative aspect-square w-28 overflow-hidden rounded-md'>
							<Image src='/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt='' fill />
						</div>
						<div className='flex flex-1  flex-col justify-start gap-5 p-3'>
							<div className='flex justify-between'>
								<span className='font-bold text-primaryDark'>XX99 MARK II HEADPHONES</span>
								<span className='font-bold text-primaryDark'>2x 1499$</span>
								<span className='font-bold text-primaryDark'>3000$</span>
							</div>
							<button className='colors-300 w-max text-H5 font-bold uppercase tracking-widest text-primary hover:text-secondary'>
								See more
							</button>
						</div>
					</div>
					<div>
						<hr className='my-6 border-veryLightPrimary' />
						<div className='space-y-5'>
							<div className='ml-10 space-y-5'>
								<div className='flex flex-1 items-center gap-5'>
									<div className='relative aspect-square w-20 overflow-hidden rounded-md'>
										<Image src='/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt='' fill />
									</div>
									<div className='flex flex-1  flex-col justify-start gap-5 p-3'>
										<div className='flex justify-between'>
											<span className='font-bold text-primaryDark'>XX99 MARK II HEADPHONES</span>
											<span className='font-bold text-primaryDark'>2x 1499$</span>
											<span className='font-bold text-primaryDark'>3000$</span>
										</div>
									</div>
								</div>
							</div>
							<div className='ml-10 space-y-5'>
								<div className='flex flex-1 items-center gap-5'>
									<div className='relative aspect-square w-20 overflow-hidden rounded-md'>
										<Image src='/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt='' fill />
									</div>
									<div className='flex flex-1  flex-col justify-start gap-5 p-3'>
										<div className='flex justify-between'>
											<span className='font-bold text-primaryDark'>XX99 MARK II HEADPHONES</span>
											<span className='font-bold text-primaryDark'>2x 1499$</span>
											<span className='font-bold text-primaryDark'>3000$</span>
										</div>
									</div>
								</div>
							</div>
							<div className='ml-10 space-y-5'>
								<div className='flex flex-1 items-center gap-5'>
									<div className='relative aspect-square w-20 overflow-hidden rounded-md'>
										<Image src='/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg' alt='' fill />
									</div>
									<div className='flex flex-1  flex-col justify-start gap-5 p-3'>
										<div className='flex justify-between'>
											<span className='font-bold text-primaryDark'>XX99 MARK II HEADPHONES</span>
											<span className='font-bold text-primaryDark'>2x 1499$</span>
											<span className='font-bold text-primaryDark'>3000$</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<hr className='mt-3 border-veryLightPrimary' />
					<div className='flex items-center justify-between'>
						<span className=' text-H5 font-bold'>Total</span>
						<span className='text-H4 font-bold'>3399$</span>
					</div>
				</div>
			</div>
		</>
	);
};
