'use client';

import { LinearProgress } from '@mui/material';
import { ChangeEvent, ReactNode, useState } from 'react';

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

interface UpdateNutritionsInputProps {
	isChanging: boolean;
	inputChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
	nutritionValue: number;
	maxNutritionValue: number;
	handleChangeValue: () => void;
}

const UpdateNutritionsInput = ({
	isChanging,
	inputChangeValue,
	nutritionValue,
	maxNutritionValue,
	handleChangeValue,
}: UpdateNutritionsInputProps) => {
	return (
		<div className='nutritions-block__change-value'>
			{isChanging ? (
				<input onChange={inputChangeValue} type='number' className='nutritions-block__input' />
			) : (
				<div className='nutritions-block__value'>
					{nutritionValue}/{maxNutritionValue}
				</div>
			)}
			<button onClick={handleChangeValue} className='nutritions-block__button'>
				<img className='nutritions-block__icon' src='/images/pencil.svg' alt='change-button' />
			</button>
		</div>
	);
};

export const UpdateNutritions = ({ name }: { name: string }) => {
	const [nutritionValue, setNutritionValue] = useState<number>(0);
	const [currentInputValue, setCurrentInputValue] = useState<number>(0);
	const [maxNutritionValue, setmaxNutritionValue] = useState<number>(100);
	const [isChanging, setChange] = useState(false);

	const handleChangeValue = () => {
		setChange(!isChanging);
		if (isChanging) setNutritionValue((prev) => prev + currentInputValue);
	};

	const inputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentInputValue(Number(e.target.value));
	};

	return (
		<UpdateNutritionsContainer name={name}>
			<UpdateNutritionsInput
				isChanging={isChanging}
				inputChangeValue={inputChangeValue}
				nutritionValue={nutritionValue}
				maxNutritionValue={maxNutritionValue}
				handleChangeValue={handleChangeValue}
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
