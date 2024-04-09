'use client';

import { Tilt_Neon } from 'next/font/google';

import { ChangeEvent, useState } from 'react';

import './styles.scss';

const neon = Tilt_Neon({ subsets: ['latin'] });

interface UpdateNutritionsInputProps {
	setInputValue: (num: number) => void;
	currentValue: number;
	maxValue: number;
}

export const UpdateInputValue = ({ setInputValue, currentValue, maxValue }: UpdateNutritionsInputProps) => {
	const [isChanging, setChangingState] = useState<boolean>(false);
	const [currentInputValue, setCurrentInputValue] = useState<number>(0);

	const handleClick = () => {
		setChangingState(!isChanging);
		setCurrentInputValue(0);
		if (isChanging) setInputValue(currentValue + currentInputValue);
	};

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentInputValue(Number(e.target.value));
	};

	return (
		<div className={neon.className}>
			<div className='value-block'>
				{isChanging ? (
					<input onChange={onInputChange} type='number' className='value-block__input' />
				) : (
					<div className='value-block__value'>
						<span className='value-block__current-value'>{currentValue}</span>/
						<span className='value-block__max-value'>{maxValue}</span>
					</div>
				)}
				<button onClick={handleClick} className='value-block__button'>
					<img className='value-block__icon' src='/images/pencil.svg' alt='change-button' />
				</button>
			</div>
		</div>
	);
};
