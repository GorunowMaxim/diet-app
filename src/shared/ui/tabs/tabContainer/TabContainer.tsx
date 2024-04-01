import { ReactNode } from 'react';

const TabContainer = ({
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

export default TabContainer;
