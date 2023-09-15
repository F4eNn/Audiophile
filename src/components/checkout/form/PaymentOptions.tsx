import React from 'react';
import { Controller } from 'react-hook-form';

import { InputCard } from './InputCard';
import { Label } from './Label';
import { Input } from './Input';
import { ErrorMessage } from './ErrorMessage';
import CashDeliveryIcon from '../../../../public/assets/checkout/icon-cash-on-delivery.svg';
import { FormProps } from '@/types/general';
import { PaymentTypes } from './PaymentDetails';

type PaymentOptionsProps = FormProps & { selectedOption: PaymentTypes };

export const PaymentOptions = ({ control, errors, selectedOption }: PaymentOptionsProps) => {
	return (
		<>
			{selectedOption === 'e-Money' ? (
				<div className='mt-10 flex justify-between gap-5'>
					<InputCard>
						<Label htmlFor='eMoneyNumber' isError={!!errors.eMoneyNumber} title='e-Money Number' />
						<Controller
							control={control}
							name='eMoneyNumber'
							render={({ field }) => {
								return (
									<Input
										id='eMoneyNumber'
										isError={!!errors.eMoneyNumber}
										placeholder='238521993'
										type='number'
										{...field}
									/>
								);
							}}
						/>
						<ErrorMessage msg={errors.eMoneyNumber?.message as string | undefined} />
					</InputCard>
					<InputCard>
						<Label htmlFor='eMoneyPin' isError={!!errors.eMoneyPin} title='e-Money Pin' />
						<Controller
							control={control}
							name='eMoneyPin'
							render={({ field }) => {
								return (
									<Input id='eMoneyPin' placeholder='6891' isError={!!errors.eMoneyPin} type='number' {...field} />
								);
							}}
						/>
						<ErrorMessage msg={errors.eMoneyPin?.message as string | undefined} />
					</InputCard>
				</div>
			) : (
				<div className='mt-10 flex items-center gap-12 pr-6'>
					<span>
						<CashDeliveryIcon />
					</span>
					<p className='font-[500] leading-7 text-brown'>
						The &quot;Cash on Delivery&quot; option enables you to pay in cash when our delivery courier arrives at your
						residence. Just make sure your address is correct so that your order will not be cancelled.
					</p>
				</div>
			)}
		</>
	);
};
