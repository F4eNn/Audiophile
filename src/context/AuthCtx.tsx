'use client';
import { createContext, useContext, useEffect, useState } from 'react';

import { ChildrenWithProps, DispatchAction } from '@/types/general';
import { getUserFromLocalCookie } from '@/helpers/auth';

type UserType = { user: string | undefined; setIsAuth: DispatchAction<boolean> };

const User = createContext<UserType>({ user: undefined, setIsAuth: () => {} });

let userState: string | undefined;

export const UserProvider = ({ children }: ChildrenWithProps) => {
	const [isAuth, setIsAuth] = useState(false);
	const [dataUser, setUser] = useState({
		user: userState || undefined,
	});
	useEffect(() => {
		if (userState !== undefined) return;

		const getUser = async () => {
			const user = await getUserFromLocalCookie();
			setUser({ user });
		};
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth]);

	useEffect(() => {
		if (!userState && dataUser) {
			userState = dataUser.user;
			setIsAuth(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const value = { user: dataUser.user, setIsAuth };

	return <User.Provider value={value}>{children}</User.Provider>;
};

export const useUser = () => useContext(User);
