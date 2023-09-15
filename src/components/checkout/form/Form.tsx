'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

import { BillingDetails } from './BillingDetails';
import { ShippingInfo } from './ShippingInfo';
import { PaymentDetails } from './PaymentDetails';

export type FormValues = Readonly<{
	name: string;
	email: string;
	phone: string;
	address: string;
	zipCode: string;
	city: string;
	country: string;
	paymentMethod: string;
	eMoneyNumber: string;
	eMoneyPin: string;
}>;

export const CheckoutForm = () => {
	const { control, handleSubmit } = useForm<FormValues>({
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			address: '',
			city: '',
			country: '',
			zipCode: '',
			paymentMethod: '',
			eMoneyNumber: '',
			eMoneyPin: '',
		},
	});

	const handleSentForm = (data: FormValues) => {
		console.log(data);
	};

	return (
		<form noValidate onSubmit={handleSubmit(handleSentForm)} className=' w-full rounded-lg bg-white p-10'>
			<h1 className='text-3xl font-bold uppercase'>Checkout</h1>
			<div className='mt-12'>
				<BillingDetails control={control} />
				<ShippingInfo control={control} />
				<PaymentDetails control={control} />
			</div>
			<button type='submit' className='my-5 w-full bg-primary p-3 text-white'>
				submit
			</button>
		</form>
	);
};
