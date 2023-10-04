import Link from 'next/link';
import React from 'react';

import LogoIcon from '../../../public/assets/logo.svg';

export const Logo = () => {
	return (
		<Link href='/'>
			<LogoIcon className='fill-primary' />
		</Link>
	);
};
