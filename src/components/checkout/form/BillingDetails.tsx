import React from 'react';
import { Controller } from 'react-hook-form';

import { FormTitle } from './FormTitle';
import { Input } from '../../ui/Input';
import { Label } from '../../ui/Label';
import { InputCard } from './InputCard';
import { ErrorMessage } from './ErrorMessage';
import { FormProps } from '@/types/general';

export const BillingDetails = ({ control, errors }: FormProps) => {
	const isNameIsInvalid = !!errors.name;
	return (
		<div>
			<FormTitle title='Billing details' />
			<div className=' mt-5 flex flex-wrap gap-x-8 gap-y-5'>
				<InputCard>
					<Label title='name' htmlFor='name' isError={isNameIsInvalid} />
					<Controller
						name='name'
						control={control}
						render={({ field }) => {
							return <Input isError={isNameIsInvalid} type='text' id='name' placeholder='Alexei Ward' {...field} />;
						}}
					/>
					<ErrorMessage msg={errors.name?.message} />
				</InputCard>
				<InputCard>
					<Label title='email' htmlFor='email' isError={!!errors.email} />
					<Controller
						name='email'
						control={control}
						render={({ field }) => {
							return (
								<Input isError={!!errors.email} type='email' id='email' placeholder='alexei@mail.com' {...field} />
							);
						}}
					/>
					<ErrorMessage msg={errors.email?.message} />
				</InputCard>
				<InputCard>
					<Label title='phone number' htmlFor='phoneNumber' isError={!!errors.phone} />
					<Controller
						name='phone'
						control={control}
						render={({ field }) => {
							return (
								<Input isError={!!errors.phone} type='tel' id='phoneNumber' placeholder='+48 202 555 014' {...field} />
							);
						}}
					/>
					<ErrorMessage msg={errors.phone?.message} />
				</InputCard>
			</div>
		</div>
	);
};
