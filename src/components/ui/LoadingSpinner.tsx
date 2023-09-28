import React from 'react';

export const LoadingSpinner = () => {
	return (
		<div className='relative'>
			<div className='h-20 w-20 rounded-full border-2 border-secondary' />
			<div className='rounded-ful absolute left-0 top-0 h-20 w-20 animate-spin rounded-full border-t-2' />
		</div>
	);
};
