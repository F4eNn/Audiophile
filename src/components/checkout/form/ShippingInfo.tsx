import React from 'react';
import { Controller } from 'react-hook-form';

import { FormTitle } from './FormTitle';
import { Label } from '../../ui/Label';
import { Input } from '../../ui/Input';
import { InputCard } from './InputCard';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { FormProps } from '@/types/general';

export const ShippingInfo = ({ control, errors }: FormProps) => {
	return (
		<div className='mt-16'>
			<FormTitle title='shipping info' />
			<div className='mt-5 flex flex-wrap gap-5 lg:gap-10'>
				<InputCard fullWidth={true}>
					<Label isError={!!errors.address} title='Address' htmlFor='address' />
					<Controller
						name='address'
						control={control}
						render={({ field }) => (
							<Input isError={!!errors.address} id='address' type='text' placeholder='1137 Wiliams Avenue' {...field} />
						)}
					/>
					<ErrorMessage msg={errors.address?.message} />
				</InputCard>
				<InputCard>
					<Label title='ZIP Code' htmlFor='zipCode' isError={!!errors.zipCode} />
					<Controller
						name='zipCode'
						control={control}
						render={({ field }) => (
							<Input isError={!!errors.zipCode} placeholder='10001' type='text' id='zipCode' {...field} />
						)}
					/>
					<ErrorMessage msg={errors.zipCode?.message} />
				</InputCard>
				<InputCard>
					<Label title='city' htmlFor='city' isError={!!errors.city} />
					<Controller
						name='city'
						control={control}
						render={({ field }) => (
							<Input isError={!!errors.city} type='text' placeholder='New York' id='city' {...field} />
						)}
					/>
					<ErrorMessage msg={errors.city?.message} />
				</InputCard>
				<InputCard>
					<Label title='country' htmlFor='country' isError={!!errors.country} />
					<Controller
						name='country'
						control={control}
						render={({ field }) => (
							<Input isError={!!errors.country} placeholder='United States' id='country' {...field} />
						)}
					/>
					<ErrorMessage msg={errors.country?.message} />
				</InputCard>
			</div>
		</div>
	);
};
