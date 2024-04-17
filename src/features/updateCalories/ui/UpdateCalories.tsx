import { ChangeEvent, useState } from 'react';

import { UpdateInputValue } from '@/features/updateInputValue';

import './styles.scss';

export const UpdateCalories = ({ maxCalories }: { maxCalories: string }) => {
	const [calories, setCalories] = useState<number>(0);

	const currentPercent = (calories * 100) / Number(maxCalories);

	return (
		<div className='calories'>
			<div className='calories-circle'>
				<svg className='svg-circle' xmlns='http://www.w3.org/2000/svg' version='1.1'>
					<circle
						style={{ strokeDashoffset: 680 - (680 * currentPercent) / 100 }}
						className='svg-progress'
						cx={125}
						cy={125}
						r={107}
						strokeLinecap='round'
					></circle>
				</svg>
				<div className='calories-circle calories-circle_small'>
					<div className='calories-circle__data'>
						<UpdateInputValue
							setInputValue={setCalories}
							currentValue={calories}
							maxValue={Number(maxCalories)}
						/>
						<p>ckal</p>
					</div>
				</div>
			</div>
		</div>
	);
};
