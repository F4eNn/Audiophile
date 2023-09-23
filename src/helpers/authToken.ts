import Cookies from 'js-cookie';
import Router from 'next/router';

type DataToken = {
	user: {
		email: string;
		username: string;
		password: string;
		id: any;
	};
};

export const setToken = (data: DataToken) => {
	if (typeof window === 'undefined') return;
	Cookies.set('id', data.user.id);
	Cookies.set('username', data.user.id);
	Cookies.set('id', data.user.id);
};
