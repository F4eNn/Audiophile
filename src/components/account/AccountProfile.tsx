'use client'
import React, { useEffect, useState } from 'react'

import { getTokenFromLocalCookie } from '@/helpers/auth'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { useAccountCtx } from '@/context/AccountCtx'
import { UserProfilePicture } from './UserProfilePicture'
import { STRAPI_URL } from '@/constants/url'

export type UserInfoType = {
	username: string
	email: string
	createdAt: string
	avatarID: number
	avatarUrl: string | null
	id: string
}
type DurationType = {
	years: number
	days: number
	months: number
}

export const AccountProfile = () => {
	const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)
	const [isUserUpdated, setIsUserUpdated] = useState(false)
	const [userDuration, setUserDuration] = useState<DurationType>({ days: 0, months: 0, years: 0 })
	const { generalUserInfo } = useAccountCtx()

	const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()

	const countUserDurationTime = (createdAt: string) => {
		const createdDateTime = new Date(createdAt)
		const newDate = new Date()
		const currentMonthDays = getDaysInMonth(newDate.getFullYear(), newDate.getMonth())

		const timeDifference = newDate.getTime() - createdDateTime.getTime()
		const milisecondsInDay = 1000 * 60 * 60 * 24

		let totalDays = Math.floor(timeDifference / milisecondsInDay)

		let months = 0
		let days = totalDays % currentMonthDays
		let years = 0

		while (totalDays >= currentMonthDays) {
			totalDays -= currentMonthDays
			months++
		}
		while (months >= 12) {
			months -= 12
			years++
		}
		setUserDuration({ days, months, years })
	}

	useEffect(() => {
		const getProfileData = async () => {
			try {
				const jwt = getTokenFromLocalCookie()
				const res = await fetch(`${STRAPI_URL}/users/me`, {
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
				})
				const resData: UserInfoType = await res.json()
				const { createdAt, email, username, avatarID, avatarUrl, id: userID } = resData
				countUserDurationTime(createdAt)
				setTimeout(() => {
					setUserInfo({ username, email, createdAt, avatarID, avatarUrl, id: userID })
				}, 500)
				setIsUserUpdated(false)
			} catch (error) {
				console.error(error)
			}
		}

		getProfileData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isUserUpdated])

	return (
		<div className='flex flex-col items-start justify-center rounded-md bg-white md:flex-row lg:gap-7 '>
			<div className='flex w-full flex-wrap  items-start  justify-between p-3 md:flex-1  md:p-8'>
				{userInfo ? (
					<>
						<div className='space-y-2.5'>
							<h1 className='text-H5'>
								Hi <span className='text-primary'>{userInfo.username}</span>
							</h1>
							<span className='block font-[700]'>{userInfo.email}</span>
							<p className='mr-3 block w-max font-[500]'>
								Account created at:{' '}
								<span className='font-[700]  text-primaryDark'>
									{new Date(userInfo.createdAt).toLocaleDateString('en-GB', { dateStyle: 'long' })}
								</span>
							</p>
						</div>
						<UserProfilePicture {...userInfo} setIsUpdate={setIsUserUpdated} />
					</>
				) : (
					<div className='mx-auto mt-10 flex flex-1 justify-center '>
						<LoadingSpinner />
					</div>
				)}
			</div>
			<div className='my-5 w-[1px] self-stretch bg-veryLightPrimary' />
			{userInfo ? (
				<div className='flex  flex-1 flex-col items-center gap-2 self-stretch p-3 sm:items-start  md:p-8'>
					<h2 className='w-max  text-H5 '>You&apos;re already with us</h2>
					<div className='space-x-3 text-H5 font-bold text-primary'>
						{userDuration.years !== 0 && (
							<span>{userDuration.years <= 1 ? `${userDuration.years} year` : `${userDuration.years} years`}</span>
						)}
						{userDuration.months !== 0 && (
							<span>{userDuration.months <= 1 ? `${userDuration.months} month` : `${userDuration.months} months`}</span>
						)}
						{userDuration.days > 0 ? (
							<span>{'This is your first day here :)'} </span>
						) : (
							<span>{userDuration.days <= 1 ? `${userDuration.days} day` : `${userDuration.days} days`}</span>
						)}
					</div>
					<hr className='mb-3 mt-3 w-full border-veryLightPrimary' />
					<div className='mx-auto flex aspect-square min-w-[100px] items-center justify-center rounded-full border-[3px] border-primary p-12'>
						<span className='mx-auto min-w-[100px] text-center text-H3 font-bold text-secondaryDark'>
							{generalUserInfo.totalSpentMoney}$
						</span>
					</div>
					<span className='mx-auto text-lg font-[500] text-brown'>Total money spent</span>
				</div>
			) : (
				<div className='mx-auto mb-5 mt-10 flex flex-1 justify-center '>
					<LoadingSpinner />
				</div>
			)}
		</div>
	)
}
