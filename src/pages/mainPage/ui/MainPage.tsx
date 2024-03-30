'use client';

import Button from '@/shared/ui/button/Button';
import './styles.scss';
import Link from 'next/link';

const MainPgeContainer = () => {
	return (
		<div className='main-wrapper'>
			<main className='main'>
				<div className='headline-block'>
					<h1 className='main-headline'>
						<span className='main-headline main-headline_left'>Easy</span>
						<span className='main-headline main-headline_right'>diet</span>
					</h1>
				</div>
				<div className='info-block'>
					<h2 className='info-block__headline'>
						The easiest way to solve your problems with weight - using our app. <br /> Try it now
					</h2>
					<div className='info-block__btns'>
						<Link className='info-block__btn' href='/sign-up'>
							Sign up
						</Link>
						<p>or</p>
						<Link className='info-block__btn' href='/sign-in'>
							Sign in
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
};

const MainPage = () => {
	return <MainPgeContainer />;
};

export default MainPage;
