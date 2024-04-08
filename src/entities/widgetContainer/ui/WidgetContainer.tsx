import { Variants, motion } from 'framer-motion';
import cn from 'classnames';

import { ReactNode } from 'react';

import './styles.scss';

interface WidgetContainerProps {
	type: 'small' | 'large';
	children: ReactNode;
	variants: Variants;
}

export const WidgetContainer: React.FC<WidgetContainerProps> = ({ type, children, variants }) => {
	const widgetClass = cn('widget', {
		widget_small: type === 'small',
		widget_large: type === 'large',
	});
    
	return (
		<motion.div variants={variants} className={widgetClass}>
			<div className='widget-wrapper'>{children}</div>
		</motion.div>
	);
};
