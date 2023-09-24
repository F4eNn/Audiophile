'use client';
import { createContext, useContext, useEffect, useState } from 'react';

import { ChildrenWithProps } from '@/types/general';
import { getUserFromLocalCookie } from '@/helpers/auth';

type UserType = { user: string | undefined };

const User = createContext<UserType>({ user: undefined });

let userState: string | undefined;

export const UserProvider = ({ children }: ChildrenWithProps) => {
	const { user } = useFetchUser();

	useEffect(() => {
		if (!userState && user) {
			userState = user;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const value = { user };

	return <User.Provider value={value}>{children}</User.Provider>;
};

export const useUser = () => useContext(User);

export const useFetchUser = () => {
	const [dataUser, setUser] = useState({
		user: userState || undefined,
	});

	useEffect(() => {
		if (userState !== undefined) return;

		const user = getUserFromLocalCookie();
		setUser({ user });
	}, []);

	return dataUser;
};
