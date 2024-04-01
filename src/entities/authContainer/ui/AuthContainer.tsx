import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import { ReactNode } from 'react';

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
			<div className='signin-card'>
				<div className='signin-card__wrapper'>
					<div className='signin-card__header'>
						<div className='logo'>
							<img className='logo-image' src='/images/logo.svg' alt='logo' />
						</div>
						<h2 className='signin-card__headline'>{variant === 'sign-in' ? 'Sign in' : 'Sign up'}</h2>
					</div>
					<div className='signin-card__main'>{children}</div>
					<div className='signin-card__footer'>
						<div className='signin-card__or'>
							<p>or</p>
						</div>
						<div className='signin-card__socials'>
							<img src='/images/google.svg' alt='google-logo' className='signin-card__socials-img' />
							<img src='/images/github.svg' alt='github-logo' className='signin-card__socials-img' />
						</div>
						<div className='signin-card__acc-box'>
							{variant === 'sign-in' ? (
								<>
									Don&apos;t have an account?
									<Link className='link signin-card__link' href='/sign-up'>
										Sign up
									</Link>
								</>
							) : (
								<>
									Do you have an account?
									<Link className='link signin-card__link' href='/sign-in'>
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
