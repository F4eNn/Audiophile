'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { BillingDetails } from './BillingDetails';
import { ShippingInfo } from './ShippingInfo';
import { PaymentDetails } from './PaymentDetails';
import { schema } from '@/utils/Validation';

export type FormValues = yup.InferType<typeof schema>;

export const CheckoutForm = () => {
	const [isPayOnline, setIsPayOnline] = useState(true);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			address: '',
			city: '',
			country: '',
			zipCode: '',
			eMoneyNumber: undefined,
			eMoneyPin: undefined,
		},
		resolver: yupResolver(schema),
		context: { isPayOnline },
	});

	const handleSentForm = (data: FormValues) => {
		console.log(data);
	};

	return (
		<form noValidate onSubmit={handleSubmit(handleSentForm)} className=' w-full rounded-lg bg-white p-10'>
			<h1 className='text-3xl font-bold uppercase'>Checkout</h1>
			<div className='mt-12'>
				<BillingDetails control={control} errors={errors} />
				<ShippingInfo control={control} errors={errors} />
				<PaymentDetails control={control} errors={errors} onPaymentMethod={setIsPayOnline} />
			</div>
			<button type='submit' className='my-5 w-full bg-primary p-3 text-white'>
				submit
			</button>
		</form>
	);
};
