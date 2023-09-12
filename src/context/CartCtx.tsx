'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

import { ChildrenWithProps, DispatchAction } from '@/types/general';

export type CartTypes = {
	name: string;
	price: number;
	image: string;
	quantity: number;
};

type CartContextTypes = {
	addToCart: (_product: CartTypes) => void;
	cart: CartTypes[];
	setCart: DispatchAction<CartTypes[]>;
	setAddCart: DispatchAction<boolean>;
	isAdd: boolean;
};

const defaultValue: CartContextTypes = {
	addToCart: (_product: CartTypes) => {},
	setCart: () => {},
	cart: [],
	setAddCart: () => {},
	isAdd: false,
};

const CartCtx = createContext(defaultValue);

export const useCartCtx = () => useContext(CartCtx);

export const CartCtxProvider = ({ children }: ChildrenWithProps) => {
	const [cart, setCart] = useState<CartTypes[]>([]);
	const [cartItem, setCartItem] = useState<CartTypes>();
	const [isAdd, setAddCart] = useState(false);

	const addToCart = (product: CartTypes) => {
		setCartItem(product);
	};

	const cartWithoutDuplicates = (cartString: string | null) => {
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
		cartWithoutDuplicates(cartString);
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
		setAddCart,
		isAdd,
		cart,
		setCart,
	};
	return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};
