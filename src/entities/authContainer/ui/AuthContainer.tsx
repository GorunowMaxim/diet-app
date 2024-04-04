import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { ReactNode } from 'react';

import './styles.scss';

const AuthContainer = ({ variant, children }: { variant: 'sign-in' | 'sign-up'; children: ReactNode }) => {
	return (
		<>
			<Toaster
				toastOptions={{
					style: {
						textAlign: 'center',
					},
				}}
			/>
			<div className='auth-card'>
				<div className='auth-card__wrapper'>
					<div className='auth-card__header'>
						<div className='logo auth-card__logo'>
							<img className='logo-image auth-card__logo-image' src='/images/logo.svg' alt='logo' />
						</div>
						<h2 className='auth-card__headline'>{variant === 'sign-in' ? 'Sign in' : 'Sign up'}</h2>
					</div>
					<div className='auth-card__main'>{children}</div>
					<div className='auth-card__footer'>
						<div className='auth-card__or'>
							<p>or</p>
						</div>
						<div className='auth-card__socials'>
							<img src='/images/google.svg' alt='google-logo' className='auth-card__socials-img' />
							<img src='/images/github.svg' alt='github-logo' className='auth-card__socials-img' />
						</div>
						<div className='auth-card__acc-box'>
							{variant === 'sign-in' ? (
								<>
									Don&apos;t have an account?
									<Link className='link auth-card__link' href='/sign-up'>
										Sign up
									</Link>
								</>
							) : (
								<>
									Do you have an account?
									<Link className='link auth-card__link' href='/sign-in'>
										Sign in
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AuthContainer;
