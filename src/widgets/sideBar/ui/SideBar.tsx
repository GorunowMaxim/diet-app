import { ReactNode } from 'react';

import { SideBarNavigation } from '@/features/sideBarNavigation';
import { Logout } from '@/features/logout';

import './styles.scss';

const SideBarContainer = ({ children }: { children: ReactNode }) => {
	return (
		<aside className='navbar'>
			<div className='navbar-wrapper'>
				<div className='navbar-header'>
					<img className='navbar-header__logo' src='/images/logo.svg' alt='' />
				</div>
				{children}
			</div>
		</aside>
	);
};

export const SideBar = () => {
	return (
		<SideBarContainer>
			<SideBarNavigation />
			<Logout />
		</SideBarContainer>
	);
};
