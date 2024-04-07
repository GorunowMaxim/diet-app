import { ReactNode } from 'react';

export const Tab = ({
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
