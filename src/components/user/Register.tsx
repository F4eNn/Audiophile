'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

import { Login } from './Login';
import { Wrapper } from '../ui/Wrapper';
import { SignUp } from './SignUp';

export const Register = () => {
	const searchParams = useSearchParams();
	const search = searchParams.get('mode');

	return <Wrapper>{search === 'login' ? <Login /> : <SignUp />}</Wrapper>;
};
