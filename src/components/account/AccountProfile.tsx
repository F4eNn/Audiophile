'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa6';

import { getTokenFromLocalCookie } from '@/helpers/auth';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { useAccountCtx } from '@/context/AccountCtx';

type UserInfoType = {
	username: string;
	email: string;
	createdAt: string;
};
type DurationType = {
	years: number;
	days: number;
	months: number;
};

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const AccountProfile = () => {
	const [userInfo, setUserInfo] = useState<Omit<UserInfoType, 'createdAt'> | null>(null);
	const [userDuration, setUserDuration] = useState<DurationType>({ days: 0, months: 0, years: 0 });
	const { generalUserInfo } = useAccountCtx();

	const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

	const countUserDurationTime = (createdAt: string) => {
		const createdDateTime = new Date(createdAt);
		const newDate = new Date();
		const currentMonthDays = getDaysInMonth(newDate.getFullYear(), newDate.getMonth());

		const timeDifference = newDate.getTime() - createdDateTime.getTime();
		const milisecondsInDay = 1000 * 60 * 60 * 24;

		let totalDays = Math.floor(timeDifference / milisecondsInDay);

		let months = 0;
		let days = totalDays % currentMonthDays;
		let years = 0;

		while (totalDays >= currentMonthDays) {
			totalDays -= currentMonthDays;
			months++;
		}
		while (months >= 12) {
			months -= 12;
			years++;
		}
		setUserDuration({ days, months, years });
	};

	useEffect(() => {
		const getCreateAccountDate = async () => {
			try {
				const jwt = getTokenFromLocalCookie();
				const res = await fetch(`${STRAPI_URL}/users/me`, {
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
				});
				const resData: UserInfoType = await res.json();
				const { createdAt, email, username } = resData;
				countUserDurationTime(createdAt);
				setTimeout(() => {
					setUserInfo({ username, email });
				}, 500);
			} catch (error) {
				console.error(error);
			}
		};

		getCreateAccountDate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
					<div className='space-x-3 text-H5 font-bold text-primary'>
						{userDuration.years !== 0 && (
							<span>{userDuration.years <= 1 ? `${userDuration.years} year` : `${userDuration.years} years`}</span>
						)}
						{userDuration.months !== 0 && (
							<span>{userDuration.months <= 1 ? `${userDuration.months} month` : `${userDuration.months} months`}</span>
						)}
						<span>{userDuration.days <= 1 ? `${userDuration.days} day` : `${userDuration.days} days`}</span>
					</div>
					<hr className='mt-3  border-veryLightPrimary' />
					<div className='mx-auto flex aspect-square min-w-[100px] items-center justify-center rounded-full border-[3px] border-primary p-12'>
						<span className='mx-auto min-w-[100px] text-center text-H3 font-bold text-secondaryDark'>
							{generalUserInfo.totalSpentMoney}$
						</span>
					</div>
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
