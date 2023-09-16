import React from 'react';

export const ErrorMessage = ({ msg }: { msg: string | undefined }) => {
	return <p className='absolute -top-1.5 right-0 text-xs text-error'>{msg}</p>;
};
