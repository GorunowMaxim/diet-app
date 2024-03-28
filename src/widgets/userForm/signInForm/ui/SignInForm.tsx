'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Form from '@/shared/ui/form/Form';
import Input from '@/shared/ui/input/Input';
import Label from '@/shared/ui/label/Label';

import '../../styles.scss';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

type Inputs = {
	[index: string]: string;
};

const SignInForm = () => {
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
			router.push('/');
		} catch (e: any) {
			console.log('error', e);
			toast.error(e.response.data.error);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Toaster
				toastOptions={{
					style: {
						textAlign: 'center',
					},
				}}
			/>
			<div className='signin-card'>
				<div className='signin-card__wrapper'>
					<div className='signin-card__header'>
						<div className='logo'>
							<img className='logo-image' src='/images/logo.svg' alt='logo' />
						</div>
						<h2 className='signin-card__headline'>Sign in</h2>
					</div>
					<div className='signin-card__main'>
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
					</div>
					<div className='signin-card__footer'>
						<div className='signin-card__or'>
							<p>or</p>
						</div>
						<div className='signin-card__socials'>
							<img src='/images/google.svg' alt='' className='signin-card__socials-img' />
							<img src='/images/github.svg' alt='' className='signin-card__socials-img' />
						</div>
						<p className='signin-card__acc-box'>
							Don&apos;t have an account?
							<Link className='link signin-card__link' href='/sign-up'>
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignInForm;
