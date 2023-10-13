import Image from 'next/image'
import React from 'react'
import Lottie from 'lottie-react'
import { MdDelete } from 'react-icons/md'

import { QuantityInput } from '@/components/ui/QuantityInput'
import { CartTypes } from '@/context/CartCtx'
import emptyCartAnimation from '../../../../../public/animation_lmhnhdpl.json'

type ItemsCart = {
	cart: CartTypes[]
	isSummary?: boolean
	handleRemoveItem?: (_id: number) => void
}

export const Items = ({ cart, isSummary = false, handleRemoveItem }: ItemsCart) => {
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
								{isSummary ? (
									<span className='text-sm font-[600] text-brown'>{`x${quantity}`}</span>
								) : (
									<div className='flex gap-2'>
										<QuantityInput
											productQuantity={quantity}
											px='px-3'
											py='py-0'
											pInput='p-1.5'
											isChangeQuantity={true}
											idx={idx}
										/>
										<button onClick={() => handleRemoveItem!(idx)} className='colors-300 w-max pl-3 hover:text-error'>
											<MdDelete size='20px' />
										</button>
									</div>
								)}
							</div>
						)
					})}
				</>
			) : isSummary ? (
				''
			) : (
				<Lottie animationData={emptyCartAnimation} style={{ height: '320px' }} />
			)}
		</>
	)
}
