'use client';

import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export const Logout = () => {
	const router = useRouter();

	const logOut = async () => {
		try {
			const response = await axios.get('/api/logout');
			console.log('sign in ok', response.status);
			router.push('/sign-in');
		} catch (e: any) {
			console.log('error', e);
			toast.error(e.message);
		}
	};

	return (
		<div className='navbar-footer'>
			<div className='navbar-footer__logout'>
				<button className='navbar-footer__button' onClick={logOut}>
					<img className='navbar-icon' src='/images/logout.svg' alt='logout' />
				</button>
			</div>
		</div>
	);
};
