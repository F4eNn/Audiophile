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

	const addToCart = (product: CartTypes) => {
		setCartItem(product);
	};

	useEffect(() => {
		const cartString = localStorage.getItem('cart');
		if (cartString !== null) {
			const cartStorage = JSON.parse(cartString);
			console.log(cartStorage);
		}
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
	// 	const cartStorage = localStorage.getItem('cart');
	// 	if (cartStorage !== null) {
	// 		const isCart = JSON.parse(cartStorage);
	// 		localStorage.setItem('cart', JSON.stringify(cart));
	// 		console.log(isCart);
	// 	} else {
	// 		localStorage.setItem('cart', JSON.stringify(cart));
	// 	}
	// }, [cart]);

	const value = {
		addToCart,
		cart,
	};
	return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};
