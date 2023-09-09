import React from 'react';

type HeroCategoryProps = { title: string };

export const HeroCategory = ({ title }: HeroCategoryProps) => {
	return (
		<div className='flex h-[500px] items-center justify-center  bg-primaryDark text-white'>
			<h1 className='text-H1 uppercase'>{title}</h1>
		</div>
	);
};
