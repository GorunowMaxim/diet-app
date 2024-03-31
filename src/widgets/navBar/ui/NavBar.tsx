'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';

import './styles.scss';

interface NavBarConfig {
	[index: string]: {
		name: string;
		href: string;
		imgHref: string;
	};
}

const navBarConfig: NavBarConfig = {
	plan: {
		name: 'Daily plan',
		href: '/dashboard/daily-plan',
		imgHref: '/images/plan.svg',
	},
	calculator: {
		name: 'Calculator',
		href: '/dashboard/calculator',
		imgHref: '/images/calculator.svg',
	},
	profile: {
		name: 'Profile',
		href: '/dashboard/profile',
		imgHref: '/images/user.svg',
	},
};

const NavBar = () => {
	const pathname = usePathname();
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
		<aside className='navbar'>
			<div className='navbar-wrapper'>
				<div className='navbar-header'>
					<div className='navbar-header__user'>
						<div className='navbar-header__user-photo'></div>
						<div className='navbar-header__user-name'>userName</div>
					</div>
				</div>
				<div className='navbar-body'>
					<nav className='navbar-navigation'>
						<ul className='navbar-nvigation__list'>
							{Object.keys(navBarConfig).map((el, index) => {
								const link = navBarConfig[el];
								return (
									<li key={index} className='navbar-navigation__item'>
										<Link
											className={
												pathname === link.href
													? 'navbar-navigation__link navbar-navigation__link_active'
													: 'navbar-navigation__link navbar-navigation__link_hide'
											}
											href={link.href}
										>
											<img className='navbar-icon' src={link.imgHref} alt={el} />
											{link.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				<div className='navbar-footer'>
					<div className='navbar-footer__logout'>
						<button className='navbar-footer__button' onClick={logOut}>
							<img className='navbar-icon' src='/images/logout.svg' alt='logout' />
							Log out
						</button>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default NavBar;
