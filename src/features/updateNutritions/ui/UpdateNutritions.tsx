import { LinearProgress } from '@mui/material';
import { ChangeEvent, useState } from 'react';

import './styles.scss';

const UpdateNutritions = ({ name }: { name: string }) => {
	const [nutritionValue, setNutritionValue] = useState<number>(0);
	const [currentInputValue, setCurrentInputValue] = useState<number>(0);
	const [maxNutritionValue, setmaxNutritionValue] = useState<number>(100);
	const [isChanging, setChange] = useState(false);

	const handleChangeValue = () => {
		setChange(!isChanging);
		if (isChanging) setNutritionValue((prev) =>  prev + currentInputValue);
	};

	const inputChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentInputValue(Number(e.target.value));
	};

	return (
		<div className='nutritions-block'>
			<div className='nutritions-block__wrapper'>
				<p className='nutritions-block__progressbar-name'>{name}</p>
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
				<LinearProgress
					color='info'
					className='nutritions-block__progressbar'
					variant='determinate'
					value={nutritionValue}
				/>
				{nutritionValue === maxNutritionValue ? (
					<img className='nutritions-block__icon' src='/images/check.svg' alt='change-button' />
				) : null}
			</div>
		</div>
	);
};

export default UpdateNutritions;
