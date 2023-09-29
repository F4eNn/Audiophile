import React, { createContext, useContext } from 'react';

import { ChildrenWithProps } from '@/types/general';

type AccountTypes = {};

const defaultValue: AccountTypes = {};

const AccountCtx = createContext<AccountTypes>(defaultValue);

export const AccountProvider = ({ children }: ChildrenWithProps) => {
	const val = {};
	return <AccountCtx.Provider value={val}>{children}</AccountCtx.Provider>;
};

export const useAccountCtx = () => useContext(AccountCtx);
