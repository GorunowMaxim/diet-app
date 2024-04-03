'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

import Form from '@/shared/ui/form/Form';
import Input from '@/shared/ui/input/Input';
import Label from '@/shared/ui/label/Label';

import type { Inputs } from '@/shared/types/types';

const SignInUser = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Inputs>({ mode: 'onBlur' });

	const onSignIn: SubmitHandler<Inputs> = async (data) => {
		try {
			setLoading(true);
			const response = await axios.post('/api/sign-in', data);
			console.log('sign in ok', response.status);
			setLoading(false);
			router.push('/dashboard/daily-plan');
		} catch (e: any) {
			console.log('error', e);
			toast.error(e.response.data.error);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form onSubmit={handleSubmit(onSignIn)} className='signin-card__form'>
			<Label className='signin-card__label'>
				<p className='signin-card__label-headline'>Email address</p>
				<Input
					className='signin-card__input'
					type='email'
					{...register('email', {
						required: 'Email field is required',
						pattern: {
							value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
							message: 'email is invalid',
						},
					})}
				/>
				{errors.email && <p className='error-message'>{errors.email.message}</p>}
			</Label>
			<Label className='signin-card__label'>
				<p className='signin-card__label-headline'>Password</p>
				<Input
					className='signin-card__input'
					type='password'
					{...register('password', {
						required: 'Password field is required',
						pattern: {
							value: /[0-9a-zA-Z!@#$%^&*]{6,}/,
							message: 'password is invalid',
						},
					})}
				/>
				{errors.password && <p className='error-message'>{errors.password.message}</p>}
			</Label>
			<button type='submit' className='signin-card__button' disabled={!isValid || isLoading}>
				{isLoading ? <img className='spinner' src='/images/spinner.svg' /> : 'Sign in'}
			</button>
		</Form>
	);
};

export default SignInUser;
