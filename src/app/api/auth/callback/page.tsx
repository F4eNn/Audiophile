import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const AuthCallbackPage = () => {
	const params = useSearchParams();
	useEffect(() => {
		const token = params.get('access_token');
		const fetchUser = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/google/callback?access_token=${token}`);
			const resData = await res.json();
			console.log(resData);
		};
		fetchUser();
	}, [params]);
	return <div>AuthCallbackPage</div>;
};

export default AuthCallbackPage;
