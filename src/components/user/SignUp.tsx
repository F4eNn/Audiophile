import Link from 'next/link';
import React from 'react';

import { navigationPaths } from '@/constants/navigation';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { SubmitButton } from './SubmitButton';

export const SignUp = () => {
	return (
		<div className='mx-5 mt-[150px] max-w-[600px] rounded-md  bg-white  p-10 sm:mx-auto'>
			<h2 className='text-H2 font-bold'>Register</h2>
			<form action='' className='my-10 space-y-8'>
				<div>
					<Label htmlFor='name' />
					<Input placeholder='Name' id='name' />
				</div>
				<div>
					<Label htmlFor='email' />
					<Input placeholder='E-mail' id='email' />
				</div>
				<div>
					<Label htmlFor='password' />
					<Input placeholder='Password' id='password' />
				</div>
				<div>
					<Label htmlFor='confirmationPassword' />
					<Input placeholder='Confirm Password' id='confirmationPassword' />
				</div>
				<SubmitButton title='sign up' />
			</form>
			<Link href={navigationPaths.register.path + '?mode=login'} className='colors-300 underline  hover:text-primary'>
				Have an account?
			</Link>
		</div>
	);
};
