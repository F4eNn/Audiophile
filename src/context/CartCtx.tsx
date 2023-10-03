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
	setDecrementQuantity: DispatchAction<{ isChange: boolean; idx: number }>;
	setIncremenetQuantity: DispatchAction<{ isChange: boolean; idx: number }>;
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
	setIncremenetQuantity: () => {},
	setDecrementQuantity: () => {},
};

const CartCtx = createContext(defaultValue);

export const useCartCtx = () => useContext(CartCtx);

export const CartCtxProvider = ({ children }: ChildrenWithProps) => {
	const [cart, setCart] = useState<CartTypes[]>([]);
	const [cartItem, setCartItem] = useState<CartTypes | null>(null);
	const [isAdd, setAddCart] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	const [grandTotal, setGrandTotal] = useState('');
	const [itemsInCart, setTotalItemsCart] = useState(0);

	const [isDecrementQuantity, setDecrementQuantity] = useState({ isChange: false, idx: 0 });
	const [isIncremenetQuantity, setIncremenetQuantity] = useState({ isChange: false, idx: 0 });

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

	const updateQuantity = (cartItems: CartTypes[], idx: number, value: number) => {
		let updateCart;
		const targetItem = cartItems[idx];
		const newQuantity = {
			...targetItem,
			quantity: targetItem.quantity + value,
		};
		updateCart = [...cartItems];
		updateCart[idx] = newQuantity;

		localStorage.setItem('cart', JSON.stringify(updateCart));
	};

	const checkCartData = () => {
		const items = localStorage.getItem('cart');
		if (items) {
			const parseItems: CartTypes[] = JSON.parse(items);
			const sumItems = parseItems.reduce((acc, curentValue) => acc + curentValue.price * curentValue.quantity, 0);

			if (isIncremenetQuantity.isChange) {
				updateQuantity(parseItems, isIncremenetQuantity.idx, 1);
				setIncremenetQuantity({ isChange: false, idx: 0 });
			}
			if (isDecrementQuantity.isChange) {
				updateQuantity(parseItems, isDecrementQuantity.idx, -1);
				setDecrementQuantity({ isChange: false, idx: 0 });
			}
			setCart(parseItems);
			setTotalPrice(Number(sumItems));
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
		checkCartData();
		return () => {
			setCartItem(null);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItem, isDecrementQuantity, isIncremenetQuantity]);

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
	};
	return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};
