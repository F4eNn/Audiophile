'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa6';

import { getUsernameData } from '@/helpers/auth';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { useAccountCtx } from '@/context/AccountCtx';

type UserInfoType = {
	username: string;
	email: string;
};

export const AccountProfile = () => {
	const [userInfo, setUserInfo] = useState<UserInfoType | null>(null);
	const { generalUserInfo } = useAccountCtx();
	useEffect(() => {
		const getUsername = async () => {
			const { username, email } = await getUsernameData();
			setTimeout(() => {
				setUserInfo({ username, email });
			}, 500);
		};
		getUsername();
	}, []);

	return (
		<div className='flex items-start justify-center gap-7 rounded-md bg-white'>
			<div className='flex flex-1 items-start justify-between  p-8'>
				{userInfo ? (
					<>
						<div className='space-y-2.5'>
							<h1 className='text-H5'>Hi {userInfo.username}</h1>
							<p className='font-[500]'>{userInfo.email}</p>
						</div>
						<div className='-mt-8 w-max'>
							<label className='  group h-[40px] cursor-pointer p-3 text-primary' aria-label='upload profile picture'>
								<input type='file' hidden />
								<div className=' colors-300 relative rounded-full border-[1px] border-primary p-3 group-hover:bg-veryLightPrimary'>
									<AiOutlineUser size='5em' />
									<div className='absolute right-1 top-0 text-gray'>
										<FaPen size='1.5em' />
									</div>
								</div>
							</label>
						</div>
					</>
				) : (
					<div className='mt-10 flex flex-1 justify-center '>
						<LoadingSpinner />
					</div>
				)}
			</div>
			<div className='my-5 w-[1px] self-stretch bg-veryLightPrimary' />
			{userInfo ? (
				<div className='flex  flex-1 flex-col gap-2 self-stretch  p-8'>
					<h2 className='text-H5'>You&apos;re already with us</h2>
					<span className='text-H5 font-bold text-primary'>4 months, 3 days</span>
					<hr className='mt-3  border-veryLightPrimary' />
					<span className='mx-auto mt-5 text-H4 font-bold text-secondaryDark '>{generalUserInfo.totalSpentMoney}$</span>
					<span className='mx-auto text-lg font-[500] text-brown'>Total money spent</span>
				</div>
			) : (
				<div className='mt-10 flex flex-1 justify-center '>
					<LoadingSpinner />
				</div>
			)}
		</div>
	);
};
