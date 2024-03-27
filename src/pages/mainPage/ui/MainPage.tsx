'use client';

import { ReactNode } from 'react';

import Input from '@/shared/ui/input/Input';
import Label from '@/shared/ui/label/Label';
import Button from '@/shared/ui/button/Button';

import './styles.scss';



const inputTypes: [string, string] = ['email', 'password'];

const MainPgeContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className='main-wrapper'>
			<main className='auth-main'>
				<div className='auth-block'>
					<div className='auth-block__wrapper'>{children}</div>
				</div>
			</main>
		</div>
	);
};

const MainPage = () => {

	return (
		<MainPgeContainer>
			<div className='logo'>
				<img className='logo-image' src='/images/logo.svg' alt='logo' />
			</div>
			<h3 className='auth-block__headline'>Log in</h3>
			<form action='#' className='auth-form'>
				{inputTypes.map((type, index) => {
					return (
						<Label key={index} className='auth-form__label'>
							<Input className='auth-form__input' type={type} placeholder={type} />
						</Label>
					);
				})}
				<Button className='auth-form__button'>continue</Button>
			</form>
		</MainPgeContainer>
	);
};

export default MainPage;
