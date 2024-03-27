'use client';

import { ReactNode } from 'react';

import UserForm from '@/widgets/userForm/signInForm/ui/SignInForm';

import './styles.scss';


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
			<UserForm />
		</MainPgeContainer>
	);
};

export default MainPage;
