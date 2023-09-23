import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { navigationPaths } from '@/constants/navigation';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { SubmitButton } from './SubmitButton';
import { schemaRegister } from '@/utils/Validation';
import { InputCard } from '../checkout/form/InputCard';
import { ErrorMessage } from '../ui/ErrorMessage';

type RegisterValues = yup.InferType<typeof schemaRegister>;

export const SignUp = () => {
	const {
		formState: { errors },
		handleSubmit,
		register,
	} = useForm<RegisterValues>({
		defaultValues: { confirmationPassword: '', email: '', name: '', password: '' },
		resolver: yupResolver(schemaRegister),
	});
	const handleRegisterUser = (data: RegisterValues) => {
		console.log(data);
	};
	return (
		<div className='mx-5 mt-[150px] max-w-[600px] rounded-md  bg-white  p-10 sm:mx-auto'>
			<h2 className='text-H2 font-bold'>Register</h2>
			<form className='my-10 space-y-10' onSubmit={handleSubmit(handleRegisterUser)}>
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
				<SubmitButton title='sign up' />
			</form>
			<Link href={navigationPaths.register.path + '?mode=login'} className='colors-300 underline  hover:text-primary'>
				Have an account?
			</Link>
		</div>
	);
};
