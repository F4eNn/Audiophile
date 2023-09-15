import React, { ChangeEvent, useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { FormTitle } from './FormTitle';
import { FormValues } from './Form';
import { InputCard } from './InputCard';
import { Label } from './Label';
import { Input } from './Input';
import CashDeliveryIcon from '../../../../public/assets/checkout/icon-cash-on-delivery.svg';

type PaymentTypes = 'e-Money' | 'cash';

type PaymentProps = {
	control: Control<FormValues>;
};
export const PaymentDetails = ({ control }: PaymentProps) => {
	const [selectedOption, setSelectedOption] = useState<PaymentTypes>('e-Money');

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
				<div className='flex flex-col gap-5'>
					<label
						htmlFor='eMoney'
						className='colors-300 flex w-[350px] cursor-pointer items-center gap-5 rounded-lg border-[1px] border-[#cfcfcf] p-4 hover:border-primary'
					>
						<input
							type='radio'
							value='e-Money'
							checked={selectedOption === 'e-Money'}
							onChange={handleChangePaymentMethod}
							id='eMoney'
							className='form-radio cursor-pointer  border-[#cfcfcf] p-2.5 text-primary checked:bg-primary focus:ring-primary '
						/>

						<span className='text-sm font-bold'>e-Money</span>
					</label>
					<label
						htmlFor='cash'
						className='colors-300 flex  cursor-pointer items-center gap-5 rounded-lg border-[1px] border-[#cfcfcf] p-4 hover:border-primary'
					>
						<input
							type='radio'
							value='cash'
							onChange={handleChangePaymentMethod}
							checked={selectedOption === 'cash'}
							id='cash'
							className='form-radio cursor-pointer border-[#cfcfcf] p-2.5 text-primary checked:bg-primary focus:ring-primary'
						/>
						<span className='text-sm font-bold'>Cash on Delivery</span>
					</label>
				</div>
			</div>
			{selectedOption === 'e-Money' ? (
				<div className='mt-10 flex justify-between gap-5'>
					<InputCard>
						<Label htmlFor='eMoneyNumber' title='e-Money Number' />
						<Controller
							control={control}
							name='eMoneyNumber'
							render={({ field }) => {
								return <Input id='eMoneyNumber' placeholder='238521993' {...field} />;
							}}
						/>
					</InputCard>
					<InputCard>
						<Label htmlFor='eMoneyPin' title='e-Money Pin' />
						<Controller
							control={control}
							name='eMoneyPin'
							render={({ field }) => {
								return <Input id='eMoneyPin' placeholder='6891' {...field} />;
							}}
						/>
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
		</div>
	);
};
