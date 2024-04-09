'use client';

import { LinearProgress } from '@mui/material';
import { ChangeEvent, ReactNode, useState } from 'react';

import { UpdateInputValue } from '@/features/updateInputValue';

import './styles.scss';

const UpdateNutritionsContainer = ({ children, name }: { children: ReactNode; name: string }) => {
	return (
		<div className='nutritions-block'>
			<div className='nutritions-block__wrapper'>
				<p className='nutritions-block__progressbar-name'>{name}</p>
				{children}
			</div>
		</div>
	);
};

export const UpdateNutritions = ({ name }: { name: string }) => {
	const [nutritionValue, setNutritionValue] = useState<number>(0);
	const [maxNutritionValue, setmaxNutritionValue] = useState<number>(100);

	return (
		<UpdateNutritionsContainer name={name}>
			<UpdateInputValue
				setInputValue={setNutritionValue}
				currentValue={nutritionValue}
				maxValue={maxNutritionValue}
			/>
			<LinearProgress
				color='info'
				className='nutritions-block__progressbar'
				variant='determinate'
				value={nutritionValue}
			/>
			{nutritionValue === maxNutritionValue ? (
				<img className='nutritions-block__icon' src='/images/check.svg' alt='change-button' />
			) : null}
		</UpdateNutritionsContainer>
	);
};
