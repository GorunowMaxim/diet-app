import { ReactNode } from 'react';

import { WidgetContainer } from '@/entities/widgetContainer';

import './styles.scss';

const itemRight = {
	hidden: { x: -60, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

export const CaloriesWidgetContainer = ({ children }: { children: ReactNode }) => {
	return (
		<WidgetContainer type='large' variants={itemRight}>
			<h3 className='widget-headline'>Your daily plan</h3>
			<div className='widget-flex'>{children}</div>
		</WidgetContainer>
	);
};
