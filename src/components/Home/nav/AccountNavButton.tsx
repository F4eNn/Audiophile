import React, { useEffect, useRef } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';

import { LinkButton } from '@/components/ui/LinkButton';
import { navigationPaths } from '@/constants/navigation';
import HelloIcon from '../../../../public/assets/hello-rafiki.svg';
import { useToggle } from '@/hooks/useToggle';

export const AccountNavButton = () => {
	const [isVisible, setIsVisible] = useToggle();
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const handleShowSettings = () => {
		setIsVisible();
	};
	const handleCloseDropdown = (e: any) => {
		if (dropdownRef.current && isVisible && !dropdownRef.current.contains(e.target as HTMLElement)) {
			setIsVisible();
		}
	};
	useEffect(() => {
		document.addEventListener('mousedown', handleCloseDropdown);
		return () => document.removeEventListener('mousedown', handleCloseDropdown);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible]);

	return (
		<div className=' relative '>
			<button
				ref={buttonRef}
				onClick={handleShowSettings}
				className='colors-300  py-3 text-center text-H6 capitalize hover:text-primary'
			>
				<span className='hidden items-center gap-1 sm:flex'>
					My account {isVisible ? <BsChevronUp size='1.2em' /> : <BsChevronDown size='1.2em' />}
				</span>
				<span className='text-H2 sm:hidden'>
					<BiUser />
				</span>
			</button>
			{isVisible && (
				<div
					onClick={handleCloseDropdown}
					ref={dropdownRef}
					className='absolute right-0 top-[75px] flex w-[300px] flex-col gap-5 rounded-lg bg-white p-2 pb-5 shadow-md sm:w-[350px]'
				>
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
