import { ReactNode } from 'react';

import './styles.scss'

export const AuthPageWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className='auth-wrapper'>
			<main className='auth-main'>{children}</main>
		</div>
	);
};
