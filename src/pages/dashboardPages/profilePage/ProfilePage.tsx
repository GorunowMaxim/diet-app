'use client';

import { ReactNode, useState } from 'react';
import './styles.scss';

const TabsBlock = ({
	activeTab,
	id,
	children,
	className,
	activeClassName,
}: {
	activeTab: string;
	id: string;
	children: ReactNode;
	className: string;
	activeClassName: string;
}) => {
	return <div className={`${className} ${activeTab === id ? activeClassName : ''}`}>{children}</div>;
};

const Tab = ({
	activeTab,
	id,
	children,
	className,
	activeClassName,
	onClick,
}: {
	activeTab: string;
	id: string;
	children: ReactNode;
	className: string;
	activeClassName: string;
	onClick: (e: any) => void;
}) => {
	return (
		<button onClick={onClick} className={`${className} ${activeTab === id ? activeClassName : ''}`} id={id}>
			{children}
		</button>
	);
};

const ProfilePage = () => {
	const [tabId, setTabId] = useState<string>('1');

	const handleClickTab = (e: any) => {
		setTabId(e.target.id);
	};

	return (
		<section className='profile'>
			<div className='profile-wrapper'>
				<div className='profile-header'>
					<div className='profile-header__photo'></div>
					<div className='profile-header__data'></div>
				</div>
				<div className='profile-body'>
					<div className='profile-body__tabs-box'>
						<Tab
							className='profile-body__tab'
							activeClassName='profile-body__tab_active'
							id='1'
							activeTab={tabId}
							onClick={handleClickTab}
						>
							Profile info
						</Tab>
						<Tab
							className='profile-body__tab'
							activeClassName='profile-body__tab_active'
							id='2'
							activeTab={tabId}
							onClick={handleClickTab}
						>
							Diet type
						</Tab>
					</div>
					<div className='profile-body__tabs-list'>
						<TabsBlock
							className='profile-body__tabs-block'
							activeClassName='profile-body__tabs-block_visible'
							activeTab={tabId}
							id='1'
						>
							<h1>hello 1</h1>
						</TabsBlock>
						<TabsBlock
							className='profile-body__tabs-block'
							activeClassName='profile-body__tabs-block_visible'
							activeTab={tabId}
							id='2'
						>
							<h1>hello 2</h1>
						</TabsBlock>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfilePage;
