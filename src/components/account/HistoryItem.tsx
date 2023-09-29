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
					<div key={name + idx} className=' '>
						{idx === 0 ? (
							<div>
								<div className='  flex flex-1 items-start gap-5'>
									<div className='relative aspect-square w-28 overflow-hidden rounded-md'>
										<Image src={image} alt={name} fill />
									</div>
									<div className='flex flex-1  flex-col justify-start gap-7 p-3'>
										<div className='flex justify-between'>
											<span className='w-[100px] font-bold text-primaryDark'>{name}</span>
											<div className='space-x-2 font-bold text-primaryDark'>
												<span>{quantity}x</span> <span>{price}$</span>
											</div>
											<span className='font-bold text-primaryDark'>{quantity * price}$</span>
										</div>
										<div className='flex justify-between'>
											<button
												onClick={showMore}
												className={`colors-300 w-max text-lg font-bold uppercase tracking-widest ${
													isVisible ? 'text-brown' : 'text-primary'
												} hover:text-secondary`}
											>
												{isVisible ? 'See less' : `See more(${history.length - 1})`}
											</button>
											<span className='text-sm'>{boughtDate}</span>
										</div>
									</div>
								</div>
								<hr className='my-6 w-full border-veryLightPrimary' />
							</div>
						) : (
							<>
								{isVisible && (
									<div>
										<div className=' ml-10 flex flex-1 items-center gap-5'>
											<div
												className={`relative aspect-square ${
													idx === 0 ? 'w-28' : 'my-5 w-20'
												} overflow-hidden rounded-md`}
											>
												<Image src={image} alt={name} fill />
											</div>
											<div className='flex flex-1 justify-between'>
												<span className='w-[100px]  font-bold  text-primaryDark'>{name}</span>
												<div className='space-x-2 font-bold text-primaryDark'>
													<span>{quantity}x</span> <span>{price}$</span>
												</div>
												<span className='font-bold text-primaryDark'>{quantity * price}$</span>
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
