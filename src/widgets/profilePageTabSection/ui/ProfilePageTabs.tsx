'use client';

import { useState } from 'react';

import { UpdateProfileUserData } from '@/features/updateProfileUserData';
import { Tab, TabContainer } from '@/shared/ui/tabs';


interface TabsConfig {
	[index: string]: {
		id: string;
		name: string;
	};
}

const tabsConfig: TabsConfig = {
	profile: {
		id: '1',
		name: 'Profile info',
	},
	diet: {
		id: '2',
		name: 'Diet type',
	},
};

export const ProfilePageTabs = () => {
	const [tabId, setTabId] = useState<string>('1');

	const handleClickTab = (e: React.MouseEvent<HTMLElement>) => {
		setTabId(e.currentTarget.id);
	};

	return (
		<>
			<div className='profile-body__tabs-box'>
				{Object.keys(tabsConfig).map((key, index) => {
					const tab = tabsConfig[key];
					return (
						<Tab
							key={index}
							className='profile-body__tab'
							activeClassName='profile-body__tab_active'
							id={tab.id}
							activeTab={tabId}
							onClick={handleClickTab}
						>
							{tab.name}
						</Tab>
					);
				})}
			</div>
			<div className='profile-body__tabs-list'>
				<TabContainer
					className='profile-body__tabs-block'
					activeClassName='profile-body__tabs-block_visible'
					activeTab={tabId}
					id='1'
				>
					<UpdateProfileUserData />
				</TabContainer>
			</div>
		</>
	);
};
