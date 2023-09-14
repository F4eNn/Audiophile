import React from 'react';

import { FormTitle } from './FormTitle';

export const PaymentDetails = () => {
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
							name='PaymentMethod'
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
							name='PaymentMethod'
							id='cash'
							className='form-radio cursor-pointer border-[#cfcfcf] p-2.5 text-primary checked:bg-primary focus:ring-primary'
						/>
						<span className='text-sm font-bold'>Cash on Delivery</span>
					</label>
				</div>
			</div>
		</div>
	);
};
