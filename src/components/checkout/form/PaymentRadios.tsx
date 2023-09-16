import React, { ChangeEvent } from 'react';

import { PaymentTypes } from './PaymentDetails';

type PaymentRadiosProps = {
	onChangePayment: (_e: ChangeEvent<HTMLInputElement>) => void;
	selectedOption: PaymentTypes;
};

export const PaymentRadios = ({ onChangePayment, selectedOption }: PaymentRadiosProps) => {
	return (
		<div className='flex flex-col gap-5'>
			<label
				htmlFor='eMoney'
				className='colors-300 flex cursor-pointer items-center gap-5 rounded-lg border-[1px] border-[#cfcfcf] p-4 hover:border-primary md:w-[350px]'
			>
				<input
					type='radio'
					value='e-Money'
					checked={selectedOption === 'e-Money'}
					onChange={onChangePayment}
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
					onChange={onChangePayment}
					checked={selectedOption === 'cash'}
					id='cash'
					className='form-radio cursor-pointer border-[#cfcfcf] p-2.5 text-primary checked:bg-primary focus:ring-primary'
				/>
				<span className='text-sm font-bold'>Cash on Delivery</span>
			</label>
		</div>
	);
};
