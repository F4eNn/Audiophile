'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { BillingDetails } from './BillingDetails';
import { ShippingInfo } from './ShippingInfo';
import { PaymentDetails } from './PaymentDetails';
import { schemaCheckout } from '@/utils/Validation';
import { Summary } from '../Summary';
import { ModalCheckout } from '../Modal';
import { useUser } from '@/context/AuthCtx';
import { getTokenFromLocalCookie, getUserFromLocalCookie } from '@/helpers/auth';
import { useCartCtx } from '@/context/CartCtx';

export type FormValues = yup.InferType<typeof schemaCheckout>;

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const CheckoutForm = () => {
	const [isPayOnline, setIsPayOnline] = useState(true);
	const { user } = useUser();
	const { cart } = useCartCtx();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
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
		resolver: yupResolver(schemaCheckout),
		context: { isPayOnline },
	});

	const handleSentForm = async (_data: FormValues) => {
		if (user) {
			const jwt = getTokenFromLocalCookie();
			await fetch(`${STRAPI_URL}/histories`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
				body: JSON.stringify({
					data: {
						history: cart,
						username: await getUserFromLocalCookie(),
					},
				}),
			});
		}
	};

	return (
		<form noValidate onSubmit={handleSubmit(handleSentForm)} className=' flex w-full flex-col gap-10 lg:flex-row'>
			<div className='w-full rounded-lg bg-white  px-5 py-10 sm:px-6 lg:w-2/3 lg:p-10'>
				<h1 className='text-3xl font-bold uppercase'>Checkout</h1>
				<div className='mt-12'>
					<BillingDetails control={control} errors={errors} />
					<ShippingInfo control={control} errors={errors} />
					<PaymentDetails control={control} errors={errors} onPaymentMethod={setIsPayOnline} />
				</div>
			</div>
			<div className='mr-6 mt-10 h-max w-full rounded-lg bg-white  px-5 py-8 lg:mt-0 lg:w-1/3 '>
				<Summary />
				<button
					type='submit'
					className='colors-300 w-full bg-primary p-3 text-H6 uppercase text-white hover:bg-secondary'
				>
					Continue & pay
				</button>
			</div>
			{isSubmitSuccessful && <ModalCheckout />}
		</form>
	);
};
