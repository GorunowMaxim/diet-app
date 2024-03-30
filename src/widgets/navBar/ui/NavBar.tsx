'use client';

import Link from 'next/link';

import './styles.scss';

interface NavBarConfig {
	[index: string]: {
		name: string;
		href: string;
	};
}

const navBarConfig: NavBarConfig = {
	plan: {
		name: 'Daily plan',
		href: '/dashboard/daily-plan',
	},
	calculator: {
		name: 'Calculator',
		href: '/dashboard/calculator',
	},
};

const NavBar = () => {
	return (
		<aside className='navbar'>
			<div className='navbar-wrapper'>
				<div className='navbar-header'></div>
				<div className='navbar-body'>
					<nav className='navbar-navigation'>
						<ul className='navbar-nvigation__list'>
							{Object.keys(navBarConfig).map((el, index) => {
								const link = navBarConfig[el];
								return (
									<li key={index} className='navbar-navigation__item'>
										<Link className='navbar-navigation__link' href={link.href}>
											{link.name}
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
