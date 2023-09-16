import React from 'react';

import { ChildrenWithProps } from '@/types/general';

type InputCardProps = ChildrenWithProps & { fullWidth?: boolean };

export const InputCard = ({ children, fullWidth = false }: InputCardProps) => {
	return (
		<div
			className={`${
				fullWidth ? 'w-full' : 'w-full sm:w-[300px] lg:w-[350px]'
			}   relative space-y-2 text-sm font-bold capitalize`}
		>
			{children}
		</div>
	);
};
