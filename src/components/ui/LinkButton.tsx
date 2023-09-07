import Link from 'next/link'
import React from 'react'

type LinkButtonProps = {
	url: string
	bg?: string
	bgHover?: string
	textColor?: string
}

export const LinkButton = ({
	url,
	bg = 'bg-primary',
	textColor = 'text-white',
	bgHover = 'hover:bg-secondary',
}: LinkButtonProps) => {
	return (
		<Link
			href={url}
			className={`inline-block px-10 py-3 text-center uppercase ${bg} ${textColor} ${bgHover} colors-300`}
		>
			see product
		</Link>
	)
}
