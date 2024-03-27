'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';

import Form from '@/shared/ui/form/Form';
import Input from '@/shared/ui/input/Input';
import Label from '@/shared/ui/label/Label';

import '../../styles.scss';

type Inputs = {
	[index: string]: string;
};

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Inputs>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div className='signin-card'>
			<div className='signin-card__wrapper'>
				<div className='signin-card__header'>
					<div className='logo'>
						<img className='logo-image' src='/images/logo.svg' alt='logo' />
					</div>
					<h2 className='signin-card__headline'>Sign up</h2>
				</div>
				<div className='signin-card__main'>
					<Form onSubmit={handleSubmit(onSubmit)} className='signin-card__form'>
						<Label className='signin-card__label'>
							<p className='signin-card__label-headline'>Username</p>
							<Input
								className='signin-card__input'
								type='text'
								{...register('username', {
									required: 'Username field is required',
									pattern: {
										value: /[a-zA-Z0-9._-]{6,}/,
										message: 'Username is invalid',
									},
								})}
							/>
							{errors.username && <p className='error-message'>{errors.username.message}</p>}
						</Label>
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
						<input type='submit' className='signin-card__button' value={'Sign up'} disabled={!isValid} />
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
						Do you have an account?
						<Link className='link signin-card__link' href='/sign-in'>
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignUpForm;
