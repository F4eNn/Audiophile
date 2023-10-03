import Link, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes } from 'react';

type DefaultProps = Pick<LinkProps, 'href' | 'onClick'> & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'aria-label'>;

type LinkButtonProps = DefaultProps & {
	bg?: string;
	bgHover?: string;
	label?: string;
	textColor?: string;
	isBorder?: boolean;
	hoverTextColor?: string;
	title?: string | 'see product';
};

export const LinkButton = ({
	bg = 'bg-primary',
	textColor = 'text-white',
	bgHover = 'hover:bg-secondary',
	isBorder = false,
	label,
	hoverTextColor,
	title = 'see product',
	...rest
}: LinkButtonProps) => {
	return (
		<Link
			{...rest}
			aria-label={label}
			className={`inline-block px-10 py-3 text-center font-[500] uppercase  ${bg} ${textColor} ${bgHover} ${hoverTextColor} ${
				isBorder ? 'border-[1px] border-primaryDark' : ''
			} colors-300`}
		>
			{title}
		</Link>
	);
};
