'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';

import Form from '@/shared/ui/form/Form';
import Input from '@/shared/ui/input/Input';
import Label from '@/shared/ui/label/Label';

import '../../styles.scss';


type Inputs = {
	[index: string]: string;
};

interface FormConfig {
	[index: string]: {
		headline: string;
		registerName: string;
		requiredField: string;
		patternValue: RegExp;
		patternMessage: string;
	};
}

const formConfig: FormConfig = {
	userName: {
		headline: 'Username',
		registerName: 'userName',
		requiredField: 'Username field is required',
		patternValue: /[a-zA-Z0-9._-]{6,}/,
		patternMessage: 'Username is invalid',
	},
	email: {
		headline: 'Email',
		registerName: 'email',
		requiredField: 'Email field is required',
		patternValue: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
		patternMessage: 'Email is invalid',
	},
	password: {
		headline: 'Password',
		registerName: 'password',
		requiredField: 'Pssword field is required',
		patternValue: /[0-9a-zA-Z!@#$%^&*]{6,}/,
		patternMessage: 'Pssword is invalid',
	},
};

const SignUpForm = () => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Inputs>({ mode: 'onChange' });

	const onSignUp: SubmitHandler<Inputs> = async (data) => {
		try {
			setLoading(true);
			const response = await axios.post('/api/sign-up', data);
			console.log('sign up ok', response.status);
			setLoading(false);
			router.push('/sign-in');
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
						<h2 className='signin-card__headline'>Sign up</h2>
					</div>
					<div className='signin-card__main'>
						<Form onSubmit={handleSubmit(onSignUp)} className='signin-card__form'>
							{Object.keys(formConfig).map((el, index) => {
								const config = formConfig[el];
								return (
									<Label key={index} className='signin-card__label'>
										<p className='signin-card__label-headline'>{config.headline}</p>
										<Input
											className='signin-card__input'
											type={
												config.registerName !== 'password' && config.registerName !== 'email'
													? 'text'
													: config.registerName
											}
											{...register(config.registerName, {
												required: config.requiredField,
												pattern: {
													value: config.patternValue,
													message: config.patternMessage,
												},
											})}
										/>
										{errors[config.registerName] && (
											<p className='error-message'>{errors[config.registerName]?.message}</p>
										)}
									</Label>
								);
							})}
							<button type='submit' className='signin-card__button' disabled={!isValid || isLoading}>
								{isLoading ? <img className='spinner' src='/images/spinner.svg' /> : 'Sign up'}
							</button>
						</Form>
					</div>
					<div className='signin-card__footer'>
						<div className='signin-card__or'>
							<p>or</p>
						</div>
						<div className='signin-card__socials'>
							<img src='/images/google.svg' alt='google-logo' className='signin-card__socials-img' />
							<img src='/images/github.svg' alt='github-logo' className='signin-card__socials-img' />
						</div>
						<p className='signin-card__acc-box'>
							Do you have an account?
							<Link className='link signin-card__link' href='/sign-in'>
								Sign in
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUpForm;
