import Link from 'next/link';
import React from 'react';

type LinkButtonProps = {
	url: string;
	bg?: string;
	bgHover?: string;
	label?: string;
	textColor?: string;
	isBorder?: boolean;
	hoverTextColor?: string;
	title?: string | 'see product';
};

export const LinkButton = ({
	url,
	bg = 'bg-primary',
	textColor = 'text-white',
	bgHover = 'hover:bg-secondary',
	isBorder = false,
	label,
	hoverTextColor,
	title = 'see product',
}: LinkButtonProps) => {
	return (
		<Link
			aria-label={label}
			href={url}
			className={`inline-block px-10 py-3 text-center font-[500] uppercase  ${bg} ${textColor} ${bgHover} ${hoverTextColor} ${
				isBorder ? 'border-[1px] border-primaryDark' : ''
			} colors-300`}
		>
			{title}
		</Link>
	);
};
