import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import { LinkButton } from '@/components/ui/LinkButton';
import { navigationPaths } from '@/constants/navigation';
import { useToggle } from '@/hooks/useToggle';
import HelloIcon from '../../../../public/assets/hello-rafiki.svg';

export const AccountNav = () => {
	const [isVisible, setIsVisible] = useToggle(false);

	const handleShowSettings = () => {
		setIsVisible();
	};
	return (
		<div className=' relative '>
			<button
				onClick={handleShowSettings}
				className='colors-300 flex items-center gap-1 py-3 text-center text-H6 capitalize hover:text-primary '
			>
				My account {isVisible ? <BsChevronUp size='1.2em' /> : <BsChevronDown size='1.2em' />}
			</button>
			{isVisible && (
				<div className='absolute right-0 top-[50px] flex w-[350px] flex-col gap-5 rounded-lg bg-white p-2 pb-5 shadow-md '>
					<HelloIcon />
					<p className='text-center text-brown '>Log in and see your purchases</p>
					<LinkButton url={navigationPaths.register.path + '?mode=login'} title='Log In' bgHover='hover:bg-secondary' />
					<LinkButton
						url={navigationPaths.register.path + '?mode=register'}
						textColor='text-primary'
						bg='bg-rose'
						hoverTextColor='hover:text-white'
						bgHover='hover:bg-primary'
						title='Sign up'
					/>
				</div>
			)}
		</div>
	);
};
