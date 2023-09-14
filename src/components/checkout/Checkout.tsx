import React from 'react';

import { Wrapper } from '../ui/Wrapper';
import { GoBack } from '../product/GoBack';
import { CheckoutForm } from './form/Form';
import { Summary } from './Summary';

export const Checkout = () => {
	return (
		<section className='mx-3 my-32'>
			<Wrapper>
				<div className='ml-2'>
					<GoBack />
				</div>
				<div className='mx-6 mt-5 flex justify-between gap-10 lg:mx-7'>
					<CheckoutForm />
					<div className='h-[500px] w-[600px] rounded-lg bg-white'>
						<Summary />
					</div>
				</div>
			</Wrapper>
		</section>
	);
};
