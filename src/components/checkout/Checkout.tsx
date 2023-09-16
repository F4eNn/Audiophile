import React from 'react';

import { Wrapper } from '../ui/Wrapper';
import { GoBack } from '../product/GoBack';
import { CheckoutForm } from './form/Form';

export const Checkout = () => {
	return (
		<section className='mx-3 my-24 lg:my-32'>
			<Wrapper>
				<div className='lg:ml-2'>
					<GoBack />
				</div>
				<div className='mx-3 mt-2  sm:mt-5 md:mx-6 lg:mx-7'>
					<CheckoutForm />
				</div>
			</Wrapper>
		</section>
	);
};
