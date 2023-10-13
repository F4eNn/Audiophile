'use client'
import React, { useState, useRef, FormEvent } from 'react'

import { CartTypes, useCartCtx } from '@/context/CartCtx'
import { QuantityInput } from '../ui/QuantityInput'

export const AddToCart = ({ image, price, name }: Partial<CartTypes>) => {
	const [delay, setDelay] = useState(true)
	const quantityRef = useRef<HTMLSpanElement>(null)

	const { addToCart: addProductToCart, setAddCart } = useCartCtx()

	const createShorterName = () => {
		const splitName = name!.split(' ')
		const removeDeviceName = ['Headphones', 'Speaker', 'Earphones', 'Wireless']
		const shorterName = splitName.filter(p => !removeDeviceName.includes(p))

		return shorterName.join(' ')
	}

	const addToCart = (e: FormEvent) => {
		e.preventDefault()
		const shorterName = createShorterName()
		const quantity = parseFloat(quantityRef.current!.textContent!)

		if (delay) {
			setDelay(false)
			setAddCart(true)
			setTimeout(() => {
				addProductToCart({ image: image!, name: shorterName, price: price!, quantity })
				setDelay(true)
				setAddCart(false)
			}, 300)
		}
	}

	return (
		<form className='flex gap-4' onSubmit={addToCart}>
			<QuantityInput ref={quantityRef} pInput='px-5' />
			<button className='colors-300 min-w-max max-w-[175px] flex-1 bg-primary px-6 uppercase text-white  hover:bg-secondary'>
				add to cart
			</button>
		</form>
	)
}
