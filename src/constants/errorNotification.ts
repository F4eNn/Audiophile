import { toast } from 'react-toastify';

export const errorNotifcation = (text: string) => {
	return toast.error(text, {
		hideProgressBar: true,
		style: { fontFamily: 'sans-serif', border: '3px solid #e74c3c', borderRadius: '10px' },
	});
};
