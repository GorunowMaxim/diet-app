import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.scss';
import ProgressBarProviders from '@/app/providers/progressBarProvider/ProgressBarProvider';
import StoreProvider from './StoreProvider';
import { makeStore } from '@/app/store/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Diet app',
	description: 'Special app was creating to help people solve their problems with weight',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ProgressBarProviders>
					<StoreProvider>
						<div className='wrapper'>{children}</div>
					</StoreProvider>
				</ProgressBarProviders>
			</body>
		</html>
	);
}
