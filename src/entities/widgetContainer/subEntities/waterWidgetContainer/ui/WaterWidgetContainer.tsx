'use client';

import { ReactNode } from 'react';

import { WidgetContainer } from '@/entities/widgetContainer';

import './styles.scss';

interface WaterWidgetContainerProps {
	children: ReactNode;
	count: number;
	maxCount: number;
	waterLevel: number;
}

const topItem = {
	hidden: { y: -20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const WaterWidgetContainer = ({ children, count, maxCount, waterLevel }: WaterWidgetContainerProps) => {
	return (
		<WidgetContainer type='small' variants={topItem}>
			<div className='water-widget'>
				<div className='water-widget__main'>
					<div className='water-widget__circle-wrapper'>
						<div className='water-widget__circle'>
							<div className='water-widget__circle water-widget__circle_inner'>
								<div style={{ top: `${waterLevel}%` }} className='water-widget__wave'></div>
								<div
									style={{ top: `${waterLevel}%` }}
									className='water-widget__wave water-widget__wave_front'
								></div>
								<p className='water-widget__count'>
									{count}/{maxCount}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='water-widget__footer'>{children}</div>
			</div>
		</WidgetContainer>
	);
};
