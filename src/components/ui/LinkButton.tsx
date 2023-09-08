import Link from 'next/link'
import React from 'react'

type LinkButtonProps = {
	url: string
	bg?: string
	bgHover?: string
	textColor?: string
	isBorder?: boolean
	hoverTextColor?: string
}

export const LinkButton = ({
	url,
	bg = 'bg-primary',
	textColor = 'text-white',
	bgHover = 'hover:bg-secondary',
	isBorder = false,
	hoverTextColor
}: LinkButtonProps) => {
	return (
		<Link
			href={url}
			className={`inline-block px-10 py-3 font-[500] text-center uppercase  ${bg} ${textColor} ${bgHover} ${hoverTextColor} ${
				isBorder ? 'border-[1px] border-primaryDark' : ''
			} colors-300`}
		>
			see product
		</Link>
	)
}
