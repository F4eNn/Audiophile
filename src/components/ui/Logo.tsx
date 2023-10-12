import Link from 'next/link'
import React from 'react'

import LogoIcon from '../../../public/assets/logo.svg'

export const Logo = () => {
	return (
		<Link href='/' aria-label='go to home page'>
			<LogoIcon className='fill-primary' />
		</Link>
	)
}
