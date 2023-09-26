'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import { DataTokenResponse, setToken } from '@/helpers/auth';
const AuthCallbackPage = () => {
	const params = useSearchParams();
	const pathname = usePathname();

	const { replace } = useRouter();
	const [text, setText] = useState('Loading...');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const token = params.get('access_token');
		const authProvider = pathname.split('/')[2];

		const fetchUser = async () => {
			try {
				setLoading(true);
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/${authProvider}/callback?access_token=${token}`,
				);
				if (!res.ok) {
					throw new Error(`Could't login to strapi. Status ${res.status}`);
				}
				const resData: DataTokenResponse = await res.json();
				setToken(resData);
				setText('You have been successfully logged in\n You will be redirected in a few seconds...');
				setTimeout(() => {
					replace('/');
					setLoading(false);
				}, 2000);
			} catch (error) {
				console.error(error);
				setText('An error occurred, please try again later');
				setLoading(false);
			}
		};
		fetchUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className=' h-screen whitespace-pre-line bg-secondaryDark pt-20 text-center text-2xl leading-10 text-white'>
			<div className='mx-3 '>
				{text}
				{isLoading && (
					<span className='mt-10  block'>
						<BeatLoader color='#D87D4A' size='1em' />
					</span>
				)}
			</div>
		</main>
	);
};

export default AuthCallbackPage;
