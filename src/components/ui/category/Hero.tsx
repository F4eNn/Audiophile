import React from 'react';

type HeroCategoryProps = { title: string };

export const HeroCategory = ({ title }: HeroCategoryProps) => {
	return (
		<div className='relative flex h-[225px] items-end justify-center bg-primaryDark  text-white md:h-[325px] lg:h-[350px] md:items-center '>
			<div className='absolute bottom-0 left-0 top-[100px] flex w-full items-center justify-center  '>
				<h1 className='text-H2 uppercase md:text-H1'>{title}</h1>
			</div>
		</div>
	);
};
