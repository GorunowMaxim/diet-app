import { UpdateInputValue } from '@/features/updateInputValue';
import './styles.scss';
import { ChangeEvent, useState } from 'react';

export const UpdateCalories = () => {
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
		<div className='calories'>
			<div className='calories-circle'>
				<svg className='svg-circle' xmlns='http://www.w3.org/2000/svg' version='1.1'>
					<circle
						style={{ strokeDashoffset: 660 - (660 * nutritionValue) / 100 }}
						className='svg-progress'
						cx={125}
						cy={125}
						r={106}
						strokeLinecap='round'
					></circle>
				</svg>
				<div className='calories-circle calories-circle_small'>
					<UpdateInputValue
						isChanging={isChanging}
						inputChangeValue={inputChangeValue}
						handleChangeValue={handleChangeValue}
						currentValue={nutritionValue}
						maxValue={maxNutritionValue}
					/>
				</div>
			</div>
		</div>
	);
};
