import Cookies from 'js-cookie';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export type DataTokenResponse = {
	user: {
		username: string;
		id: string;
	};
	jwt: string;
};

export const setToken = (data: DataTokenResponse) => {
	if (typeof window === 'undefined') return;
	Cookies.set('id', data.user.id);
	Cookies.set('username', data.user.username);
	Cookies.set('jwt', data.jwt);
};

export const unsetToken = () => {
	if (typeof window === 'undefined') return;

	Cookies.remove('id');
	Cookies.remove('username');
	Cookies.remove('jwt');
};

export const getUserFromLocalCookie = async () => {
	const jwt = getTokenFromLocalCookie();
	const data = await getUser(jwt);
	return data && data.username;
};
export const getUsernameData = async () => {
	const jwt = getTokenFromLocalCookie();
	return await getUser(jwt);
};

const getUser = async (jwt: string | undefined) => {
	if (jwt) {
		const res = await fetch(`${STRAPI_URL}/users/me`, {
			headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
		});
		const resData = await res.json();
		return resData;
	}
};

export const getTokenFromLocalCookie = () => {
	return Cookies.get('jwt');
};
