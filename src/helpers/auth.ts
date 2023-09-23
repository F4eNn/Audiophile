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
