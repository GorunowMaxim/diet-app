'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ReactNode } from 'react';

const ProgressBarProviders = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<ProgressBar height='2px' color='#3d7941' options={{ showSpinner: false }} shallowRouting />
			{children}
		</>
	);
};

export default ProgressBarProviders;
