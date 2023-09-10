'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

export const GoBack = () => {
	const { back } = useRouter();
	return (
		<button
			onClick={() => back()}
			className='colors-300 mr-auto p-6 font-[500] capitalize text-brown hover:text-primary '
		>
			Go back
		</button>
	);
};
