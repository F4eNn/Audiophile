import React from 'react';

import { FormTitle } from './FormTitle';
import { Input } from './Input';
import { Label } from './Label';
import { InputCard } from './InputCard';

export const BillingDetails = () => {
	return (
		<div>
			<FormTitle title='Billing details' />
			<div className=' mt-5 flex flex-wrap gap-x-8 gap-y-5'>
				<InputCard>
					<Label title='name' htmlFor='name' />
					<Input type='text' id='name' placeholder='Alexei Ward' />
				</InputCard>
				<InputCard>
					<Label title='email' htmlFor='email' />
					<Input type='email' id='email' placeholder='alexei@mail.com' />
				</InputCard>
				<InputCard>
					<Label title='phone number' htmlFor='phoneNumber' />
					<Input type='number' id='phoneNumber' placeholder='+48 202 555 014' />
				</InputCard>
			</div>
		</div>
	);
};
