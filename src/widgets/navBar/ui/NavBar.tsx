'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import axios from 'axios';

import './styles.scss';

interface NavBarConfig {
	[index: string]: {
		href: string;
		imgHref: string;
		imgHrefActive: string;
	};
}

const navBarConfig: NavBarConfig = {
	plan: {
		href: '/dashboard/daily-plan',
		imgHref: '/images/dashboard.svg',
		imgHrefActive: '/images/dashboard-active.svg',
	},
	calculator: {
		href: '/dashboard/calculator',
		imgHref: '/images/calculator.svg',
		imgHrefActive: '/images/calculator-active.svg',
	},
	profile: {
		href: '/dashboard/profile',
		imgHref: '/images/user.svg',
		imgHrefActive: '/images/user-active.svg',
	},
};

const NavBar = () => {
	const pathname = usePathname();

	return (
		<aside className='navbar'>
			<div className='navbar-wrapper'>
				<div className='navbar-header'>
					<img className='navbar-header__logo' src='/images/logo.svg' alt='' />
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
											{pathname === link.href ? (
												<img className='navbar-icon' src={link.imgHrefActive} alt={el} />
											) : (
												<img className='navbar-icon' src={link.imgHref} alt={el} />
											)}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>

			</div>
		</aside>
	);
};

export default NavBar;
