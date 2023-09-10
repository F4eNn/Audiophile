import React from 'react';

import { ProductData } from '@/types/data';
import { Wrapper } from '../ui/Wrapper';
import { AnimateSection } from '../ui/AnimateSection';

export const ProductFeatures = ({ features, includes }: ProductData) => {
	return (
		<section className='mx-6 mt-28 lg:mx-7'>
			<Wrapper>
				<AnimateSection>
					<div className='flex flex-col gap-24 text-brown md:justify-between lg:flex-row  lg:justify-normal '>
						<div className='w-full space-y-8 lg:w-1/2'>
							<h2 className='text-H3 uppercase text-primaryDark'>Features</h2>
							{features.split('\n').map((features, idx) => (
								<div key={idx} className=''>
									<p className='my-4'>{features}</p>
								</div>
							))}
						</div>
						<div className=' flex flex-col sm:flex-row sm:justify-between  lg:flex-col '>
							<h2 className=' text-H3 font-bold uppercase text-primaryDark '>in the box</h2>
							<div className='flex-1 flex-col items-center  sm:mt-4  sm:flex lg:block'>
								<div className='space-y-3.5'>
									{includes.map(({ item, quantity }, idx) => {
										return (
											<div key={item + idx} className='space-x-5'>
												<span className='font-bold text-primary'>{quantity}x</span>
												<span>{item}</span>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</AnimateSection>
			</Wrapper>
		</section>
	);
};
