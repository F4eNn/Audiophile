import React from 'react';
import Link from 'next/link';

import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { SubmitButton } from './SubmitButton';
import { navigationPaths } from '@/constants/navigation';

export const Login = () => {
	return (
		<div className=' mx-5 mt-[150px] flex flex-col gap-5 md:flex-row '>
			<div className=' flex-1 rounded-md bg-white p-10'>
				<h1 className='text-H2 text-primaryDark'>Log In</h1>
				<form className='mt-12 space-y-8'>
					<div>
						<Label htmlFor='email' />
						<Input id='email' placeholder='E-mail' />
					</div>
					<div>
						<Label htmlFor='password' />
						<Input id='password' placeholder='Password' />
					</div>
					<SubmitButton />
				</form>
				<div className='mt-8 flex items-center'>
					<span className='w-full border-t-[1px] border-secondary' />
					<span className='text-lg'>or</span>
					<span className='w-full border-t-[1px] border-secondary' />
				</div>
				<button className='mx-auto my-5 block'>Google</button>
				<button className='mx-auto block '>Github</button>
			</div>
			<div className='flex flex-1 flex-col gap-5 rounded-md bg-white p-10'>
				<h2 className='text-H4 capitalize'>Join us</h2>
				<Link
					href={navigationPaths.register.path + '?mode=register'}
					className='colors-300 w-full border-[1px] border-primary py-3 text-center font-bold  text-primary hover:bg-veryLightPrimary'
				>
					Create an account
				</Link>
			</div>
		</div>
	);
};
