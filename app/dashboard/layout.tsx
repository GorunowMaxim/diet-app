import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/widgets/navBar/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Diet app',
	description: 'Special app was creating to help people solve their problems with weight',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className='dashboard'>
			<div className='dashboard-wrapper'>
				<NavBar />
				<main className='main'>{children}</main>
			</div>
		</div>
	);
}
