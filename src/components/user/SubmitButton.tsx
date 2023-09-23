import React from 'react';

type SubmitBtnProps = {
	title: string;
};

export const SubmitButton = ({ title }: SubmitBtnProps) => {
	return (
		<button
			type='submit'
			className='colors-300 w-full bg-primary py-3 text-xl capitalize text-white hover:bg-secondary'
		>
			{title}
		</button>
	);
};
