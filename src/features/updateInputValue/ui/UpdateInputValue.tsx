'use client';

import { ChangeEvent } from 'react';

import './styles.scss';

interface UpdateNutritionsInputProps {
	isChanging: boolean;
	inputChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
	currentValue: number;
	maxValue: number;
	handleChangeValue: () => void;
}

export const UpdateInputValue = ({
	isChanging,
	inputChangeValue,
	currentValue,
	maxValue,
	handleChangeValue,
}: UpdateNutritionsInputProps) => {
	return (
		<div className='value-block'>
			{isChanging ? (
				<input onChange={inputChangeValue} type='number' className='value-block__input' />
			) : (
				<div className='value-block__value'>
					{currentValue}/{maxValue}
				</div>
			)}
			<button onClick={handleChangeValue} className='value-block__button'>
				<img className='value-block__icon' src='/images/pencil.svg' alt='change-button' />
			</button>
		</div>
	);
};
