import React from 'react';

import { FormTitle } from './FormTitle';
import { Label } from './Label';
import { Input } from './Input';
import { InputCard } from './InputCard';

export const ShippingInfo = () => {
	return (
		<div className='mt-16'>
			<FormTitle title='shipping info' />
			<div className='mt-5 flex flex-wrap gap-5'>
				<InputCard fullWidth={true}>
					<Label title='Address' htmlFor='address' />
					<Input id='address' placeholder='1137 Wiliams Avenue' />
				</InputCard>
				<InputCard>
					<Label title='ZIP Code' htmlFor='zipCode' />
					<Input placeholder='10001' id='zipCode' />
				</InputCard>
				<InputCard>
					<Label title='city' htmlFor='city' />
					<Input placeholder='New York' id='city' />
				</InputCard>
				<InputCard>
					<Label title='country' htmlFor='country' />
					<Input placeholder='United States' id='country' />
				</InputCard>
			</div>
		</div>
	);
};
