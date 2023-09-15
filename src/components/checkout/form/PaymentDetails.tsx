import React, { ChangeEvent, useEffect, useState } from 'react';

import { FormTitle } from './FormTitle';
import { DispatchAction, FormProps } from '@/types/general';
import { PaymentRadios } from './PaymentRadios';
import { PaymentOptions } from './PaymentOptions';

export type PaymentTypes = 'e-Money' | 'cash';

type PaymentProps = FormProps & { onPaymentMethod: DispatchAction<boolean> };

export const PaymentDetails = ({ onPaymentMethod, ...props }: PaymentProps) => {
	const [selectedOption, setSelectedOption] = useState<PaymentTypes>('e-Money');

	useEffect(() => {
		onPaymentMethod(selectedOption === 'e-Money');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedOption]);

	const handleChangePaymentMethod = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(e.target.value as PaymentTypes);
	};
	return (
		<div className='mt-16'>
			<FormTitle title='payment details' />
			<div className='mt-5 flex justify-between'>
				<label htmlFor='paymentMethod' className='text-sm font-bold capitalize'>
					Payment method
				</label>
				<PaymentRadios onChangePayment={handleChangePaymentMethod} selectedOption={selectedOption} />
			</div>
			<PaymentOptions {...props} selectedOption={selectedOption} />
		</div>
	);
};
