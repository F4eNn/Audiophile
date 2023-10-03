import React, { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { SubmitButton } from './SubmitButton';
import { navigationPaths } from '@/constants/navigation';
import { setToken } from '@/helpers/auth';
import { useUser } from '@/context/AuthCtx';
import GoogleIcon from '../../../public/assets/google-icon.svg';
import GithubIcon from '../../../public/assets/github-mark-white.svg';
import { LoginButton } from './LoginButton';
import { STRAPI_URL } from '@/constants/url';
import { errorNotifcation } from '@/constants/errorNotification';

export const Login = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const router = useRouter();
	const [data, setData] = useState({ password: '', identifier: '' });
	const { setIsAuth } = useUser();

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			setIsSubmitting(true);

			const res = await fetch(`${STRAPI_URL}/auth/local`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					identifier: data.identifier,
					password: data.password,
				}),
			});
			const responseData = await res.json();
			if (res.status === 400) {
				setIsSubmitting(false);
				return errorNotifcation('Incorrect credentials');
			}
			if (res.status === 429) {
				setIsSubmitting(false);
				return errorNotifcation('Try again later');
			}
			router.push('/');
			setToken(responseData);
			setIsSubmitting(false);
			setIsAuth(true);
		} catch (error) {
			console.error(error);
			setIsSubmitting(false);
		}
	};

	return (
		<div className=' mx-5 mt-[150px] flex flex-col gap-5 md:flex-row '>
			<div className=' flex-1 rounded-md bg-white p-10'>
				<h1 className='text-H2 text-primaryDark'>Log In</h1>
				<form className='mt-12 space-y-8' onSubmit={handleSubmit}>
					<div>
						<Label htmlFor='identifier' />
						<Input
							id='identifier'
							placeholder='E-mail or Name'
							type='text'
							name='identifier'
							onChange={handleOnChange}
						/>
					</div>
					<div>
						<Label htmlFor='password' />
						<Input id='password' placeholder='Password' type='password' name='password' onChange={handleOnChange} />
					</div>
					<SubmitButton title='log in' isSending={isSubmitting} />
				</form>
				<div className='mt-8 flex items-center'>
					<span className='w-full border-t-[1px] border-secondary' />
					<span className='text-lg'>or</span>
					<span className='w-full border-t-[1px] border-secondary' />
				</div>

				<LoginButton providerName='google' icon={<GoogleIcon />} />
				<LoginButton
					providerName='github'
					icon={<GithubIcon />}
					bg='bg-primaryDark'
					bgHover='hover:bg-primaryDark/90'
					text='text-white'
				/>
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
