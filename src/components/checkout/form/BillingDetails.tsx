import React from 'react';
import { type Control, Controller } from 'react-hook-form';

import { FormTitle } from './FormTitle';
import { Input } from './Input';
import { Label } from './Label';
import { InputCard } from './InputCard';
import { FormValues } from './Form';

type BillingProps = {
	control: Control<FormValues>;
};

export const BillingDetails = ({ control }: BillingProps) => {
	return (
		<div>
			<FormTitle title='Billing details' />
			<div className=' mt-5 flex flex-wrap gap-x-8 gap-y-5'>
				<InputCard>
					<Label title='name' htmlFor='name' />
					<Controller
						name='name'
						control={control}
						render={({ field }) => {
							return <Input type='text' id='name' placeholder='Alexei Ward' {...field} />;
						}}
					/>
				</InputCard>
				<InputCard>
					<Label title='email' htmlFor='email' />
					<Controller
						name='email'
						control={control}
						render={({ field }) => {
							return <Input type='email' id='email' placeholder='alexei@mail.com' {...field} />;
						}}
					/>
				</InputCard>
				<InputCard>
					<Label title='phone number' htmlFor='phoneNumber' />
					<Controller
						name='phone'
						control={control}
						render={({ field }) => {
							return <Input type='tel' id='phoneNumber' placeholder='+48 202 555 014' {...field} />;
						}}
					/>
				</InputCard>
			</div>
		</div>
	);
};
