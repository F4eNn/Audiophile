'use client';
import React, { createContext, useContext } from 'react';

import { ChildrenWithProps } from '@/types/general';

type CartTypes = {};

const defaultValue: CartTypes = {};

const CartCtx = createContext(defaultValue);

export const useCartCtx = () => useContext(CartCtx);

export const CartCtxProvider = ({ children }: ChildrenWithProps) => {
	const value = {};
	return <CartCtx.Provider value={value}>{children}</CartCtx.Provider>;
};
