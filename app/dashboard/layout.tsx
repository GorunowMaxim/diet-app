import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from '@/widgets/navBar/ui/NavBar';

import './styles.scss';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Diet app',
	description: 'Special app was creating to help people solve their problems with weight',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Toaster />
			<div className='dashboard'>
				<div className='dashboard-wrapper'>
					<NavBar />
					<main className='dashboard-main'>{children}</main>
				</div>
			</div>
		</>
	);
}
