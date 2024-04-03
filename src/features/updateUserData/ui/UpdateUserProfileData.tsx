'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import Input from '@/shared/ui/input/Input';
import Label from '@/shared/ui/label/Label';

import type { Inputs } from '@/shared/types/types';

import './styles.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import { fetchUserData } from '@/app/store/slices/user/userSlice';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateUserProfileData = () => {
	const dispatch = useAppDispatch();
	const { userData } = useAppSelector((state) => state.user);

	const [isLoading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		dispatch(fetchUserData());
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Inputs>();

	const onRefresh: SubmitHandler<Inputs> = async (data) => {
		console.log(data);
		try {
			setLoading(true);
			const response = await axios.patch('/api/dashboard/profile', data);
			console.log('refresh is ok', response.status);
			toast.success('data is change');
			setLoading(false);
		} catch (error) {
			console.log(error);
			toast.error('smth went wrong');
			setLoading(false);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='profile-form-wrapper'>
			<form onSubmit={handleSubmit(onRefresh)} className='profile-form'>
				<Label className='profile-form__label'>
					<p className='profile-form__label-headline'>Username</p>
					<Input
						className='input profile-form__input'
						defaultValue={userData !== undefined ? userData?.userName : ''}
						type='text'
						{...register('userName', {
							// required: 'Email field is required',
							// pattern: {
							// 	value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
							// 	message: 'email is invalid',
							// },
						})}
					/>
					{errors.email && <p className='error-message'>{errors.email.message}</p>}
				</Label>

				<Label className='profile-form__label'>
					<p className='profile-form__label-headline'>Email address</p>
					<Input
						className='input profile-form__input'
						defaultValue={userData !== undefined ? userData?.email : ''}
						type='email'
						{...register('email', {
							// required: 'Email field is required',
							// pattern: {
							// 	value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
							// 	message: 'email is invalid',
							// },
						})}
					/>
					{errors.email && <p className='error-message'>{errors.email.message}</p>}
				</Label>

				<Label className='profile-form__label'>
					<p className='profile-form__label-headline'>First name</p>
					<Input
						className='input profile-form__input'
						type='text'
						{...register('firstName', {
							// required: 'Email field is required',
							// pattern: {
							// 	value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
							// 	message: 'email is invalid',
							// },
						})}
					/>
					{errors.email && <p className='error-message'>{errors.email.message}</p>}
				</Label>
				<Label className='profile-form__label'>
					<p className='profile-form__label-headline'>Last name</p>
					<Input
						className='input profile-form__input'
						type='text'
						{...register('lastName', {
							// required: 'Email field is required',
							// pattern: {
							// 	value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
							// 	message: 'email is invalid',
							// },
						})}
					/>
					{errors.email && <p className='error-message'>{errors.email.message}</p>}
				</Label>
				<Label className='profile-form__label'>
					<p className='profile-form__label-headline'>Country</p>
					<Input
						className='input profile-form__input'
						type='text'
						{...register('country', {
							// required: 'Email field is required',
							// pattern: {
							// 	value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
							// 	message: 'email is invalid',
							// },
						})}
					/>
					{errors.email && <p className='error-message'>{errors.email.message}</p>}
				</Label>
				<Label className='profile-form__label'>
					<p className='profile-form__label-headline'>Date of birthday</p>
					<Input
						className='input profile-form__input'
						type='date'
						{...register('dateOfBirth', {
							// required: 'Email field is required',
							// pattern: {
							// 	value: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
							// 	message: 'email is invalid',
							// },
						})}
					/>
					{errors.email && <p className='error-message'>{errors.email.message}</p>}
				</Label>
				<div className='profile-form__button-wrapper'>
					<button type='submit' className='submit-button profile-form__button'>
						{isLoading ? <img className='spinner' src='/images/spinner.svg' /> : 'Save'}
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateUserProfileData;
