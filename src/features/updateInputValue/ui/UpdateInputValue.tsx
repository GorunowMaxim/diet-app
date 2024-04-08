'use client';

import { ChangeEvent } from 'react';

import './styles.scss';

interface UpdateNutritionsInputProps {
	isChanging: boolean;
	inputChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
	nutritionValue: number;
	maxNutritionValue: number;
	handleChangeValue: () => void;
}

export const UpdateInputValue = ({
	isChanging,
	inputChangeValue,
	nutritionValue,
	maxNutritionValue,
	handleChangeValue,
}: UpdateNutritionsInputProps) => {
	return (
		<div className='value-block'>
			{isChanging ? (
				<input onChange={inputChangeValue} type='number' className='value-block__input' />
			) : (
				<div className='value-block__value'>
					{nutritionValue}/{maxNutritionValue}
				</div>
			)}
			<button onClick={handleChangeValue} className='value-block__button'>
				<img className='value-block__icon' src='/images/pencil.svg' alt='change-button' />
			</button>
		</div>
	);
};
