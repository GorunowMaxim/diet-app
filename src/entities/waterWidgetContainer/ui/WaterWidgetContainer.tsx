'use client';

import { ReactNode } from 'react';

import './styles.scss';

interface WaterWidgetContainerProps {
	children: ReactNode;
	count: number;
	maxCount: number;
	waterLevel: number;
}

const WaterWidgetContainer = ({ children, count, maxCount, waterLevel }: WaterWidgetContainerProps) => {
	return (
		<div className='water-widget'>
			<div className='water-widget__wrapper'>
				<div className='water-widget__main'>
					<div className='water-widget__circle-wrapper'>
						<div style={{ top: `${waterLevel}%` }} className='water-widget__circle'></div>
						<div
							style={{ top: `${waterLevel}%` }}
							className='water-widget__circle water-widget__circle_front'
						></div>
						<p className='water-widget__count'>
							{count}/{maxCount}
						</p>
					</div>
				</div>
				<div className='water-widget__footer'>{children}</div>
			</div>
		</div>
	);
};

export default WaterWidgetContainer;
