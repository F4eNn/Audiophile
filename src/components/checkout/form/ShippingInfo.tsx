import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { FormTitle } from './FormTitle';
import { Label } from './Label';
import { Input } from './Input';
import { InputCard } from './InputCard';
import { FormValues } from './Form';

type ShippingProps = {
	control: Control<FormValues>;
};

export const ShippingInfo = ({ control }: ShippingProps) => {
	return (
		<div className='mt-16'>
			<FormTitle title='shipping info' />
			<div className='mt-5 flex flex-wrap gap-5'>
				<InputCard fullWidth={true}>
					<Label title='Address' htmlFor='address' />
					<Controller
						name='address'
						control={control}
						render={({ field }) => <Input id='address' placeholder='1137 Wiliams Avenue' {...field} />}
					/>
				</InputCard>
				<InputCard>
					<Label title='ZIP Code' htmlFor='zipCode' />
					<Controller
						name='zipCode'
						control={control}
						render={({ field }) => <Input placeholder='10001' id='zipCode' {...field} />}
					/>
				</InputCard>
				<InputCard>
					<Label title='city' htmlFor='city' />
					<Controller
						name='city'
						control={control}
						render={({ field }) => <Input placeholder='New York' id='city' {...field} />}
					/>
				</InputCard>
				<InputCard>
					<Label title='country' htmlFor='country' />
					<Controller
						name='country'
						control={control}
						render={({ field }) => <Input placeholder='United States' id='country' {...field} />}
					/>
				</InputCard>
			</div>
		</div>
	);
};
