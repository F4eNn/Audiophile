'use client';
import React, { createContext, useContext, useState } from 'react';

import { ChildrenWithProps, DispatchAction } from '@/types/general';

type AccountTypes = {
	generalUserInfo: { totalSpentMoney: string };
	setGeneralUserInfo: DispatchAction<{ totalSpentMoney: string }>;
};
const defaultValue: AccountTypes = { generalUserInfo: { totalSpentMoney: '' }, setGeneralUserInfo: _userInfo => {} };

const AccountCtx = createContext<AccountTypes>(defaultValue);

export const AccountProvider = ({ children }: ChildrenWithProps) => {
	const [generalUserInfo, setGeneralUserInfo] = useState({ totalSpentMoney: '0' });

	const val = { generalUserInfo, setGeneralUserInfo };
	return <AccountCtx.Provider value={val}>{children}</AccountCtx.Provider>;
};

export const useAccountCtx = () => useContext(AccountCtx);
