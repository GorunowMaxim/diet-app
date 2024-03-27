import { ReactNode } from 'react';

const AuthPageWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className='auth-wrapper'>
			<main className='auth-main'>{children}</main>
		</div>
	);
};

export default AuthPageWrapper;
