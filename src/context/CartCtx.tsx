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

	const cartWithoudDuplicates = (cartString: string | null) => {
		if (cartString !== null) {
			let updatedItem;
			let updateCart;

			const parseCart: CartTypes[] = JSON.parse(cartString);
			const cartStorage: CartTypes[] = parseCart.filter(i => i !== null);
			const existingCartItem = cartStorage.findIndex(item => item.name === cartItem?.name);

			if (existingCartItem === -1 && cartItem) {
				localStorage.setItem('cart', JSON.stringify([...cartStorage, cartItem]));
			} else if (cartItem) {
				const existingItem = cartStorage[existingCartItem];
				updatedItem = {
					...existingItem,
					quantity: existingItem.quantity + cartItem.quantity,
				};
				updateCart = [...cartStorage];
				updateCart[existingCartItem] = updatedItem;
				localStorage.setItem('cart', JSON.stringify(updateCart));
			}
		} else {
			localStorage.setItem('cart', JSON.stringify([]));
		}
	};

	useEffect(() => {
		const cartString = localStorage.getItem('cart');
		cartWithoudDuplicates(cartString);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItem]);

	useEffect(() => {
		const checkCartData = () => {
			const items = localStorage.getItem('cart');
			if (items) {
				const parseItems = JSON.parse(items);
				setCart(parseItems);
			}
		};
		checkCartData();
	}, [cartItem]);

	const value = {
		addToCart,
		cart,
	};
	return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};
