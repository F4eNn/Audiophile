import React, { useEffect, useRef, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

import { LinkButton } from '@/components/ui/LinkButton';
import { navigationPaths } from '@/constants/navigation';
import HelloIcon from '../../../../public/assets/hello-rafiki.svg';
import { useToggle } from '@/hooks/useToggle';
import { useUser } from '@/context/AuthCtx';
import { getUserFromLocalCookie, unsetToken } from '@/helpers/auth';

export const AccountNavButton = () => {
	const [isVisible, setIsVisible] = useToggle(true);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const [username, setUsername] = useState('');
	const { refresh } = useRouter();

	const { user, setIsAuth } = useUser();

	const handleShowSettings = () => {
		setIsVisible();
	};

	const handleCloseDropdown = (e: any) => {
		const target = e.target as HTMLElement;
		if (
			dropdownRef.current &&
			isVisible &&
			!dropdownRef.current.contains(target) &&
			!buttonRef.current?.contains(target)
		) {
			setIsVisible();
		}
	};
	useEffect(() => {
		document.addEventListener('mousedown', handleCloseDropdown);
		return () => document.removeEventListener('mousedown', handleCloseDropdown);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible]);

	const logout = () => {
		unsetToken();
		refresh();
		setIsAuth(false);
	};
	useEffect(() => {
		const getUsername = async () => {
			const username = await getUserFromLocalCookie();
			setUsername(username);
		};
		getUsername();
	}, []);
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
					{user ? (
						<>
							<p className='mx-auto my-5 text-H5 font-[600] text-primaryDark'>
								Hi <span className='capitalize text-primary'>{username}</span>
							</p>
							<LinkButton url={navigationPaths.account.path} title='Account' />
							<button onClick={logout} className='colors-300  bg-error py-3 text-white hover:bg-error/75'>
								Log out
							</button>
						</>
					) : (
						<>
							<HelloIcon />
							<p className='text-center text-brown '>Log in and see your purchases</p>
							<LinkButton
								url={navigationPaths.register.path + '?mode=login'}
								title='Log In'
								bgHover='hover:bg-secondary'
							/>
							<LinkButton
								url={navigationPaths.register.path + '?mode=register'}
								textColor='text-primary'
								bg='bg-rose'
								hoverTextColor='hover:text-white'
								bgHover='hover:bg-primary'
								title='Sign up'
							/>
						</>
					)}
				</div>
			)}
		</div>
	);
};
