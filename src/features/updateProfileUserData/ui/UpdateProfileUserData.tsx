'use client';

import axios from 'axios';
import toast from 'react-hot-toast';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

import Input from '@/shared/ui/input/Input';
import Label from '@/shared/ui/label/Label';

import type { Inputs } from '@/shared/types/types';

import './styles.scss';

type Pattern = {
	value: RegExp;
	message: string;
};

interface UserDataConfig {
	[name: string]: {
		name: string;
		headline: string;
		type: string;
		pattern: Pattern;
	};
}

const userConfigInputs: UserDataConfig = {
	userName: {
		name: 'userName',
		headline: 'Username',
		type: 'text',
		pattern: {
			value: /[a-zA-Z0-9]/,
			message: 'Username must have more than 6 symbols',
		},
	},
	email: {
		name: 'email',
		headline: 'Email',
		type: 'email',
		pattern: {
			value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
			message: 'Email is invalid',
		},
	},
	firstName: {
		name: 'firtsName',
		headline: 'First name',
		type: 'text',
		pattern: {
			value: /[a-zA-Z]/,
			message: 'Name is invalid',
		},
	},
	lastName: {
		name: 'lastName',
		headline: 'Last name',
		type: 'text',
		pattern: {
			value: /[a-zA-Z]/,
			message: 'Name is invalid',
		},
	},
	country: {
		name: 'country',
		headline: 'Country',
		type: 'text',
		pattern: {
			value: /[a-zA-Z]/,
			message: 'Country is invalid',
		},
	},
};

export const UpdateProfileUserData = () => {
	const [isLoading, setLoading] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Inputs>({ mode: 'onBlur' });

	const onRefresh: SubmitHandler<Inputs> = async (data) => {
		try {
			setLoading(true);
			const response = await axios.patch('/api/dashboard/profile', data);
			console.log('refresh is ok', response.status);
			toast.success('data changed successfully');
			setLoading(false);
		} catch (error) {
			console.log(error);
			toast.error('smth went wrong, try later');
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='profile-form-wrapper'>
			<form onSubmit={handleSubmit(onRefresh)} className='profile-form'>
				{Object.keys(userConfigInputs).map((el, index) => {
					const input = userConfigInputs[el];
					return (
						<Label key={index} className='profile-form__label'>
							<p className='profile-form__label-headline'>{input.headline}</p>
							<Input
								className='input profile-form__input'
								type={input.type}
								{...register(input.name, {
									pattern: {
										value: input.pattern.value,
										message: input.pattern.message,
									},
								})}
							/>
							{errors[input.name] && <p className='error-message'>{errors[input.name]?.message}</p>}
						</Label>
					);
				})}
				<Label className='profile-form__label'>
					<p className='profile-form__label-headline'>Date of Birthday</p>
					<Input className='input profile-form__input' type='date' {...register('dateOfBirth')} />
				</Label>
				<Label className='profile-form__label profile-form__label-textarea'>
					<p className='profile-form__label-headline'>About</p>
					<textarea className='profile-form__textarea' {...register('about')} cols={30} rows={10}></textarea>
				</Label>
				<div className='profile-form__button-wrapper'>
					<button type='submit' className='profile-form__button' disabled={isLoading || !isValid}>
						{isLoading ? <img className='spinner' src='/images/spinner.svg' /> : 'Save'}
					</button>
				</div>
			</form>
		</div>
	);
};
