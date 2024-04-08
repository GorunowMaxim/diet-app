import { ReactNode } from 'react';

import { WidgetContainer } from '@/entities/widgetContainer';

import './styles.scss';

const itemLeft = {
	hidden: { x: 60, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

export const NutritionWidgetContainer = ({ children }: { children: ReactNode }) => {
	return (
		<WidgetContainer type='large' variants={itemLeft}>
			<div className='nutritions'>
				<h3 className='nutritions__headline'>This is your nutritions cap for a day</h3>
				{children}
			</div>
		</WidgetContainer>
	);
};
