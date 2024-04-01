'use client';




import TabContainer from '@/shared/ui/tabs/tabContainer/TabContainer';
import Tab from '@/shared/ui/tabs/tab/Tab';
import { useState } from 'react';

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

const ProfilePageTabs = () => {
	const [tabId, setTabId] = useState<string>('1');

	const handleClickTab = (e: any) => {
		setTabId(e.target.id);
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
					<h1>hello 1</h1>
				</TabContainer>
				<TabContainer
					className='profile-body__tabs-block'
					activeClassName='profile-body__tabs-block_visible'
					activeTab={tabId}
					id='2'
				>
					<h1>hello 2</h1>
				</TabContainer>
			</div>
		</>
	);
};

export default ProfilePageTabs;
