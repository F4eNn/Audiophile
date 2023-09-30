import React, { ButtonHTMLAttributes } from 'react';

type ButtonAttributes = 'onClick' | 'type';

type ButtonPrimaryProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, ButtonAttributes> & {
	title: string;
	classNames: string;
};

export const ButtonPrimary = ({ title, classNames, ...props }: ButtonPrimaryProps) => {
	return (
		<button {...props} className={`colors-300 p-2.5 ${classNames}`}>
			{title}
		</button>
	);
};
