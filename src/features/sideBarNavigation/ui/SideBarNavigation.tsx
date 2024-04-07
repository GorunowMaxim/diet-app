'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export const SideBarNavigation = () => {
	const pathname = usePathname();

	return (
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
	);
};
