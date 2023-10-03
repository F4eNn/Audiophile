import Image from 'next/image';
import React, { useState } from 'react';

import { HistoryItemsType } from './PurchaseHistory';

type HistoryItemProps = {
	history: HistoryItemsType;
	createdAt: string;
};

export const HistoryItem = ({ history, createdAt }: HistoryItemProps) => {
	const [isVisible, setIsVisible] = useState(false);

	const showMore = () => {
		setIsVisible(prev => !prev);
	};
	const newDate = new Date(createdAt);
	const boughtDate = newDate.toLocaleDateString('en-GB', { dateStyle: 'medium' });
	return (
		<div className='my-10 '>
			{history.map(({ image, name, price, quantity }, idx) => {
				return (
					<div key={name + idx}>
						{idx === 0 ? (
							<div>
								<div className='flex  flex-1 flex-col items-start gap-5 sm:flex-row'>
									<div className='flex w-full items-center justify-center gap-6 sm:w-max'>
										<div className='relative aspect-square w-32 overflow-hidden rounded-md sm:w-28'>
											<Image src={image} alt={name} fill />
										</div>
										<span className='text-H5 font-bold text-primaryDark sm:hidden'>{name}</span>
									</div>
									<div className='mt-5 flex  w-full flex-1 flex-col justify-start gap-7 p-3'>
										<div className='flex justify-between  '>
											<span className='hidden w-[100px] font-bold text-primaryDark sm:inline-block'>{name}</span>
											<div className='space-x-2 font-bold text-primaryDark'>
												<span>{quantity}x</span> <span>{price}$</span>
											</div>
											<span className='font-bold text-primaryDark'>{quantity * price}$</span>
										</div>
										<div className='flex items-center justify-between'>
											{history.length > 1 && (
												<button
													onClick={showMore}
													className={`colors-300 w-max text-lg font-bold uppercase tracking-widest ${
														isVisible ? 'text-brown' : 'text-primary'
													} hover:text-secondary`}
												>
													{isVisible ? 'See less' : `See more(${history.length - 1})`}
												</button>
											)}
											<span className='ml-auto text-sm'>{boughtDate}</span>
										</div>
									</div>
								</div>
								<hr className='my-6 w-full border-veryLightPrimary' />
							</div>
						) : (
							<>
								{isVisible && (
									<div>
										<div className=' flex flex-1 items-center gap-5 sm:ml-10'>
											<div
												className={`relative aspect-square ${
													idx === 0 ? 'w-28' : 'my-5 w-20'
												} overflow-hidden rounded-md`}
											>
												<Image src={image} alt={name} fill />
											</div>
											<div className='flex flex-1 flex-col justify-between gap-3 sm:gap-0'>
												<span className='w-[100px]  font-bold  text-primaryDark'>{name}</span>
												<div className='flex justify-between'>
													<div className='space-x-2 font-bold text-primaryDark'>
														<span>{quantity}x</span> <span>{price}$</span>
													</div>
													<span className='font-bold text-primaryDark'>{quantity * price}$</span>
												</div>
											</div>
										</div>
									</div>
								)}
							</>
						)}
					</div>
				);
			})}
		</div>
	);
};
