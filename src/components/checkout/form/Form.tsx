'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import { BillingDetails } from './BillingDetails';
import { ShippingInfo } from './ShippingInfo';
import { PaymentDetails } from './PaymentDetails';

export const CheckoutForm = () => {
	const { control, handleSubmit } = useForm();

	const handleSentForm = (data: any) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(handleSentForm)} className=' w-full rounded-lg bg-white p-10'>
			<h1 className='text-3xl font-bold uppercase'>Checkout</h1>
			<div className='mt-12'>
				<BillingDetails />
				<ShippingInfo />
				<PaymentDetails />
			</div>
		</form>
	);
};
