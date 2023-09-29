'use client';
import React, { useEffect, useState } from 'react';

import { getTokenFromLocalCookie } from '@/helpers/auth';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { HistoryItem } from './HistoryItem';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export type HistoryItemType = {
	image: string;
	name: string;
	price: number;
	quantity: number;
};
type HistoryMapType = {
	attributes: { history: HistoryItemsType; username: string }[];
};

export type HistoryItemsType = HistoryItemType[];

type HistoryTypes = {
	history: HistoryItemType[];
	totalPrice: string;
	username: string | null;
};

export const PurchaseHistory = () => {
	const [dataHistory, setDataHistory] = useState<HistoryTypes[] | null>(null);
	const [totalSpentMoney, setTotalSpentMoney] = useState(0);

	useEffect(() => {
		const getHistoryCart = async () => {
			try {
				const jwt = getTokenFromLocalCookie();
				const res = await fetch(`${STRAPI_URL}/histories`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${jwt}`,
					},
				});
				const resData = await res.json();
				const historyArr = resData.data.map((item: HistoryMapType) => item.attributes);
				setTimeout(() => setDataHistory(historyArr), 500);
			} catch (error) {
				console.error(error);
			}
		};
		getHistoryCart();
	}, []);

	const initialValue = 0;
	dataHistory?.reduce((acc, currVal) => {
		return acc + Number(currVal.totalPrice);
	}, initialValue);

	return (
		<>
			<h2 className='my-5 text-H3'>Purchase History</h2>
			<div className='my-10  '>
				{!dataHistory ? (
					<div className=' my-10 flex w-full items-center justify-center  rounded-md bg-white  p-24'>
						<LoadingSpinner />
					</div>
				) : (
					<>
						{dataHistory.map((items, idx) => {
							return (
								<div key={idx} className='my-10 rounded-md bg-white p-10'>
									<HistoryItem history={items.history} />
									<div className='flex items-center justify-between'>
										<span className=' text-H5 font-bold text-brown'>Total(VAT)</span>
										<span className='text-H4 font-bold'>${items.totalPrice}</span>
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
		</>
	);
};
