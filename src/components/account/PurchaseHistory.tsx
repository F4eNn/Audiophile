/* eslint-disable quotes */
'use client'
import React, { useCallback, useEffect, useState } from 'react'

import { getTokenFromLocalCookie, getUserFromLocalCookie } from '@/helpers/auth'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { HistoryItem } from './HistoryItem'
import { useAccountCtx } from '@/context/AccountCtx'
import { LinkButton } from '../ui/LinkButton'
import { navigationPaths } from '@/constants/navigation'
import { STRAPI_URL } from '@/constants/url'

export type HistoryItemType = {
	image: string
	name: string
	price: number
	quantity: number
}
type HistoryMapType = {
	attributes: { history: HistoryItemsType; username: string }[]
}

export type HistoryItemsType = HistoryItemType[]

type HistoryTypes = {
	history: HistoryItemType[]
	totalPrice: string
	username: string | null
	createdAt: string
}

export const PurchaseHistory = () => {
	const [dataHistory, setDataHistory] = useState<HistoryTypes[] | null>(null)
	const [isFetching, setIsFetching] = useState(false)
	const { setGeneralUserInfo } = useAccountCtx()

	useEffect(() => {
		const getHistoryCart = async () => {
			setIsFetching(true)
			try {
				const jwt = getTokenFromLocalCookie()
				const username = await getUserFromLocalCookie()
				const res = await fetch(`${STRAPI_URL}/histories?filters[username][$eq]=${username}`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${jwt}`,
					},
				})
				if (!res.ok) {
					setIsFetching(false)
					throw new Error('Failed fetch data')
				}
				const resData = await res.json()
				const historyArr = resData.data.map((item: HistoryMapType) => item.attributes)

				setTimeout(() => {
					setDataHistory(historyArr)
					setIsFetching(false)
				}, 500)
			} catch (error) {
				console.error(error)
			}
		}
		getHistoryCart()
	}, [])

	const setGeneralInfo = useCallback(() => {
		const initialValue = 0
		const grandTotal = dataHistory?.reduce((acc, currVal) => {
			const convertToString = currVal.totalPrice.replace(',', '')
			return acc + Number(convertToString)
		}, initialValue)

		if (grandTotal) setGeneralUserInfo({ totalSpentMoney: grandTotal.toLocaleString() })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataHistory, setGeneralUserInfo])

	useEffect(() => {
		setGeneralInfo()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataHistory])

	return (
		<>
			<h2 className='my-5 text-H3'>Purchase History</h2>
			<div className='my-10  '>
				{isFetching ? (
					<div className=' my-10 flex w-full items-center justify-center  rounded-md bg-white  p-24'>
						<LoadingSpinner />
					</div>
				) : (
					<>
						{dataHistory?.length === 0 ? (
							<div className='w-full rounded-md bg-white p-10'>
								<h3 className='whitespace-pre-line text-center text-H4 leading-10'>
									{"Your purchase history is looking a bit empty \n it's the perfect time to start shopping!"}
								</h3>
								<div className='mx-auto my-10 w-max'>
									<LinkButton href={navigationPaths.home.path} title='Go Buy' />
								</div>
							</div>
						) : (
							dataHistory?.map((items, idx) => {
								return (
									<div key={idx} className='my-10 rounded-md bg-white p-4 sm:p-10'>
										<HistoryItem createdAt={items.createdAt} history={items.history} />
										<div className='flex items-center justify-between px-3 sm:px-0'>
											<span className=' font-bold  text-brown sm:text-H5'>Total(VAT)</span>
											<span className='text-H5 font-bold sm:text-H4'>${items.totalPrice}</span>
										</div>
									</div>
								)
							})
						)}
					</>
				)}
			</div>
		</>
	)
}
