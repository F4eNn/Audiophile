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
	totalPrice: number;
	setTotalPrice: DispatchAction<number>;
	setGrandTotal: DispatchAction<string>;
	grandTotal: string;
	itemsInCart: number;
};

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
};

const CartCtx = createContext(defaultValue);

export const useCartCtx = () => useContext(CartCtx);

export const CartCtxProvider = ({ children }: ChildrenWithProps) => {
	const [cart, setCart] = useState<CartTypes[]>([]);
	const [cartItem, setCartItem] = useState<CartTypes>();
	const [isAdd, setAddCart] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [grandTotal, setGrandTotal] = useState('');
	const [itemsInCart, setTotalItemsCart] = useState(0);

	const addToCart = (product: CartTypes) => {
		setCartItem(product);
	};

	const countItemsInCart = (purchases: CartTypes[]) => {
		const countPurchaseItems = purchases.reduce((acc, val) => {
			return acc + val.quantity;
		}, 0);
		return countPurchaseItems;
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
			localStorage.setItem('cartItems', JSON.stringify(0));
		}
	};

	useEffect(() => {
		const cartString = localStorage.getItem('cart');
		cartWithoutDuplicates(cartString);

		const current = localStorage.getItem('cart');
		if (current) {
			const parsePurchasesArr: CartTypes[] = JSON.parse(current);
			const numberOfItems = countItemsInCart(parsePurchasesArr);
			setTotalItemsCart(numberOfItems);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItem]);

	useEffect(() => {
		const checkCartData = () => {
			const items = localStorage.getItem('cart');
			if (items) {
				const parseItems: CartTypes[] = JSON.parse(items);
				const sumItems = parseItems.reduce((acc, curentValue) => acc + curentValue.price * curentValue.quantity, 0);

				setCart(parseItems);
				setTotalPrice(Number(sumItems));
			}
		};
		checkCartData();
	}, [cartItem]);

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
	};
	return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};
