import React from 'react';

type SubmitBtnProps = {
	title: string;
	isSending: boolean;
};

export const SubmitButton = ({ title, isSending }: SubmitBtnProps) => {
	return (
		<button
			type='submit'
			disabled={isSending}
			className={`colors-300 flex w-full items-center justify-center bg-primary py-3 text-xl capitalize text-white hover:bg-secondary ${
				isSending ? 'cursor-not-allowed' : ''
			}`}
		>
			{isSending ? <div className='mr-3 h-7 w-7  animate-spin rounded-[50%]     border-t-[3px] border-white' /> : title}
		</button>
	);
};
