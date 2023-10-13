'use client'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { ChildrenWithProps, DispatchAction } from '@/types/general'

export type CartTypes = {
	name: string
	price: number
	image: string
	quantity: number
}

type CartContextTypes = {
	addToCart: (_product: CartTypes) => void
	cart: CartTypes[]
	setCart: DispatchAction<CartTypes[]>
	setAddCart: DispatchAction<boolean>
	isAdd: boolean
	totalPrice: number
	setTotalPrice: DispatchAction<number>
	setGrandTotal: DispatchAction<string>
	setDecrementQuantity: DispatchAction<{ isChange: boolean; idx: number }>
	setIncremenetQuantity: DispatchAction<{ isChange: boolean; idx: number }>
	grandTotal: string
	itemsInCart: number
	removeItemFromCart: (id: number) => void
}

const defaultValue: CartContextTypes = {
	addToCart: (_product: CartTypes) => {},
	setCart: () => {},
	cart: [],
	setAddCart: () => {},
	isAdd: false,
	totalPrice: 0,
	setTotalPrice: () => {},
	setGrandTotal: () => {},
	grandTotal: '',
	itemsInCart: 0,
	setIncremenetQuantity: () => {},
	setDecrementQuantity: () => {},
	removeItemFromCart: (_id: number) => {},
}

const CartCtx = createContext(defaultValue)

export const useCartCtx = () => useContext(CartCtx)

export const CartCtxProvider = ({ children }: ChildrenWithProps) => {
	const [cart, setCart] = useState<CartTypes[]>([])
	const [cartItem, setCartItem] = useState<CartTypes | null>(null)
	const [isAdd, setAddCart] = useState(false)
	const [shouldUpdateCart, setShouldUpdateCart] = useState(false)
	const [totalPrice, setTotalPrice] = useState(0)
	const [grandTotal, setGrandTotal] = useState('')
	const [itemsInCart, setTotalItemsCart] = useState(0)

	const [isDecrementQuantity, setDecrementQuantity] = useState({ isChange: false, idx: 0 })
	const [isIncremenetQuantity, setIncremenetQuantity] = useState({ isChange: false, idx: 0 })

	const addToCart = (product: CartTypes) => {
		setCartItem(product)
	}

	const countItemsInCart = (purchases: CartTypes[]) => {
		const countPurchaseItems = purchases.reduce((acc, val) => {
			return acc + val.quantity
		}, 0)
		return countPurchaseItems
	}

	const addUniqueItemsToCart = (cartString: string | null) => {
		if (cartString !== null) {
			const parseCart: CartTypes[] = JSON.parse(cartString)
			const cartStorage: CartTypes[] = parseCart.filter(i => i !== null)

			const existingCartItem = cartStorage.findIndex(item => item.name === cartItem?.name)

			if (existingCartItem === -1 && cartItem) {
				localStorage.setItem('cart', JSON.stringify([...cartStorage, cartItem]))
			} else if (cartItem) {
				updateQuantityOfProducts(cartStorage, existingCartItem)
			}
		} else {
			localStorage.setItem('cart', JSON.stringify([]))
			localStorage.setItem('cartItems', JSON.stringify(0))
		}
	}

	const updateQuantityOfProducts = (cart: CartTypes[], idxItem: number, value?: number) => {
		let updateCart = [...cart]

		if (cartItem) {
			const existingItem = updateCart[idxItem]
			const updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + cartItem!.quantity,
			}
			updateCart[idxItem] = updatedItem
		} else {
			const targetItem = updateCart[idxItem]
			const newQuantity = {
				...targetItem,
				quantity: targetItem.quantity + value!,
			}
			updateCart = [...cart]
			updateCart[idxItem] = newQuantity
		}
		localStorage.setItem('cart', JSON.stringify(updateCart))
	}

	const checkCartData = () => {
		const items = localStorage.getItem('cart')
		if (items) {
			const parseItems: CartTypes[] = JSON.parse(items)
			const sumItems = parseItems.reduce((acc, curentValue) => acc + curentValue.price * curentValue.quantity, 0)

			if (isIncremenetQuantity.isChange) {
				updateQuantityOfProducts(parseItems, isIncremenetQuantity.idx, 1)
				setIncremenetQuantity({ isChange: false, idx: 0 })
			}
			if (isDecrementQuantity.isChange) {
				updateQuantityOfProducts(parseItems, isDecrementQuantity.idx, -1)
				setDecrementQuantity({ isChange: false, idx: 0 })
			}
			setCart(parseItems)
			setTotalPrice(Number(sumItems))
		}
	}

	const removeItemFromCart = (id: number) => {
		const cartItems = localStorage.getItem('cart')
		if (cartItems) {
			const parseItems = JSON.parse(cartItems)
			const updatedItems = [...parseItems]
			updatedItems.splice(id, 1)
			localStorage.setItem('cart', JSON.stringify(updatedItems))
			setShouldUpdateCart(true)
		}
	}

	useEffect(() => {
		const cartString = localStorage.getItem('cart')
		addUniqueItemsToCart(cartString)

		const current = localStorage.getItem('cart')
		if (current) {
			const parsePurchasesArr: CartTypes[] = JSON.parse(current)
			const numberOfItems = countItemsInCart(parsePurchasesArr)
			setTotalItemsCart(numberOfItems)
		}
		checkCartData()
		return () => {
			setCartItem(null)
			setShouldUpdateCart(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItem, shouldUpdateCart, isDecrementQuantity, isIncremenetQuantity])

	const value = {
		addToCart,
		setAddCart,
		setGrandTotal,
		grandTotal,
		isAdd,
		cart,
		setCart,
		totalPrice,
		setTotalPrice,
		itemsInCart,
		setIncremenetQuantity,
		setDecrementQuantity,
		removeItemFromCart,
	}
	return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>
}
