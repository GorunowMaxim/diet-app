'use client';

import { CalculateDietData } from '@/features/calculateDietData';

import './styles.scss';

export const CalculatorPage = () => {
	return (
		<div className='calculator'>
			<div className='calculator-wrapper'>
				<div className='calculator-description'>
					<h1>This is our calculator where you can find out your personality daily plan</h1>
				</div>
				<CalculateDietData />
			</div>
		</div>
	);
};
