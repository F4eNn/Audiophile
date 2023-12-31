import Link from 'next/link'
import React from 'react'

import { STRAPI_URL } from '@/constants/url'

type LoginButtonProps = {
	providerName: string
	icon: any
	bg?: string
	bgHover?: string
	text?: string
}

export const LoginButton = ({
	providerName,
	icon,
	bg = 'bg-white',
	bgHover = 'hover:bg-gray/5',
	text,
}: LoginButtonProps) => {
	return (
		<Link
			href={`${STRAPI_URL}/connect/${providerName}`}
			className={`colors-300 mx-auto my-7 flex w-full ${text} items-center justify-center gap-3 capitalize ${bg} p-3.5 font-[500] shadow-md ${bgHover}`}
		>
			{icon} Continue With {providerName}
		</Link>
	)
}
