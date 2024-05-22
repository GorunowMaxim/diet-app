import { Toaster } from 'react-hot-toast';

import { SideBar } from '@/widgets/sideBar';

import './styles.scss';

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Toaster />
			<div className='dashboard'>
				<div className='dashboard-wrapper'>
					<SideBar />
					<main className='dashboard-main'>{children}</main>
				</div>
			</div>
		</>
	);
}
