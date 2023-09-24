import Cookies from 'js-cookie';

type DataToken = {
	user: {
		username: string;
		id: string;
	};
	jwt: string;
};

export const setToken = (data: DataToken) => {
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

export const getUserFromLocalCookie = () => {
	return Cookies.get('username');
};
