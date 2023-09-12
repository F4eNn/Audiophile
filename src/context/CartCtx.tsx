'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { ChildrenWithProps } from '@/types/general';

export type CartTypes = {
	name: string;
	price: number;
	image: string;
	quantity: number;
};

type CartContextTypes = {
	addToCart: (_product: CartTypes) => void;
	cart: CartTypes[];
};

const defaultValue: CartContextTypes = {
	addToCart: (_product: CartTypes) => {},
	cart: [],
};

const CartCtx = createContext(defaultValue);

export const useCartCtx = () => useContext(CartCtx);

export const CartCtxProvider = ({ children }: ChildrenWithProps) => {
	const [cart, setCart] = useState<CartTypes[]>([]);
	const [cartItem, setCartItem] = useState<CartTypes>();
	// const [cartProducts, setCartProducts] = useState(0);
	// const [cart, setCart] = useState(false)

	const addToCart = (product: CartTypes) => {
		setCartItem(product);
	};

	useEffect(() => {
		const existingCartItem = cart.findIndex(item => item.name === cartItem?.name);
		let updatedItem;
		let updatedItems;
		if (existingCartItem === -1 && cartItem) {
			setCart(prev => [...prev, cartItem]);
		} else if (cartItem) {
			const existingItem = cart[existingCartItem];
			updatedItem = {
				...existingItem,
				quantity: existingItem.quantity + cartItem.quantity,
			};
			updatedItems = [...cart];
			updatedItems[existingCartItem] = updatedItem;
			setCart(updatedItems);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItem]);

	// useEffect(() => {
	// 	setCart()
	// },[allCartItems])

	const value = {
		addToCart,
		cart,
	};
	return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};
