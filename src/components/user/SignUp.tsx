import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

import { navigationPaths } from '@/constants/navigation';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { SubmitButton } from './SubmitButton';
import { schemaRegister } from '@/utils/Validation';
import { InputCard } from '../checkout/form/InputCard';
import { ErrorMessage } from '../ui/ErrorMessage';
import { STRAPI_URL } from '@/constants/url';

export type RegisterValues = yup.InferType<typeof schemaRegister>;

export const SignUp = () => {
	const [isUser, setIsUser] = useState({ accountExist: false, msg: '' });
	const router = useRouter();
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
	} = useForm<RegisterValues>({
		defaultValues: { confirmationPassword: '', email: '', name: '', password: '' },
		resolver: yupResolver(schemaRegister),
	});

	const handleRegisterUser = async (data: RegisterValues) => {
		try {
			const response = await fetch(`${STRAPI_URL}/auth/local/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: data.name,
					email: data.email,
					password: data.password,
				}),
			});
			const responseData = await response.json();

			if (responseData.error && responseData.error.status === 400) {
				setIsUser({
					accountExist: true,
					msg: responseData.error.message,
				});
			} else {
				setIsUser({
					accountExist: false,
					msg: '',
				});
				router.push(navigationPaths.home.path);
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className='mx-5 mt-[150px] max-w-[600px] rounded-md  bg-white  p-10 sm:mx-auto'>
			<h2 className='text-H2 font-bold'>Register</h2>
			{isUser.accountExist && <p className='-mb-5 mt-5 text-center font-[500] text-error'>{isUser.msg}</p>}
			<form className='my-10 space-y-9' onSubmit={handleSubmit(handleRegisterUser)}>
				<InputCard fullWidth={true}>
					<Label htmlFor='name' />
					<Input placeholder='Name' id='name' {...register('name')} isError={!!errors.name} type='text' />
					<ErrorMessage msg={errors.name?.message} isLabel={false} />
				</InputCard>
				<InputCard fullWidth={true}>
					<Label htmlFor='email' />
					<Input placeholder='E-mail' id='email' {...register('email')} isError={!!errors.email} type='email' />
					<ErrorMessage msg={errors.email?.message} isLabel={false} />
				</InputCard>
				<InputCard fullWidth={true}>
					<Label htmlFor='password' />
					<Input
						placeholder='Password'
						id='password'
						{...register('password')}
						isError={!!errors.password}
						type='password'
					/>
					<ErrorMessage msg={errors.password?.message} isLabel={false} />
				</InputCard>
				<InputCard fullWidth={true}>
					<Label htmlFor='confirmPassword' />
					<Input
						placeholder='Confirm Password'
						id='confirmPassword'
						type='password'
						{...register('confirmationPassword')}
						isError={!!errors.confirmationPassword}
					/>
					<ErrorMessage msg={errors.confirmationPassword?.message} isLabel={false} />
				</InputCard>
				<SubmitButton title='sign up' isSending={isSubmitting} />
			</form>
			<Link href={navigationPaths.register.path + '?mode=login'} className='colors-300 underline  hover:text-primary'>
				Have an account?
			</Link>
		</div>
	);
};
