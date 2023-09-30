import { toast } from 'react-toastify';

export const errorNotifcation = (text: string) => {
	return toast.error(text, {
		hideProgressBar: true,
		autoClose: 2000,
		style: { fontFamily: 'sans-serif', border: '3px solid #e74c3c', borderRadius: '10px' },
	});
};
