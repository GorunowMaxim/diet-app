'use client';

import Button from '@/shared/ui/button/Button';

import './styles.scss';

interface UpdateWaterWidgetProps {
	waterLevel: number;
	diffNumber: number;
	count: number;
	maxCount: number;
	setWaterLevel: (num: number) => void;
	setCount: (num: number) => void;
}

export const UpdateWaterWidget = ({
	waterLevel,
	diffNumber,
	setWaterLevel,
	setCount,
	count,
	maxCount,
}: UpdateWaterWidgetProps) => {
	const incrementWaterLevel = () => {
		if (waterLevel > 0) {
			setWaterLevel(waterLevel - diffNumber);
			setCount(count + 1);
		}
	};

	const decremetWaterLevel = () => {
		if (waterLevel < maxCount * diffNumber) {
			console.log(waterLevel);
			setWaterLevel(waterLevel + diffNumber);
			setCount(count - 1);
		}
	};
	return (
		<div className='update-btns'>
			<Button onClick={decremetWaterLevel} className='update-btn'>
				<p>-</p>
			</Button>
			<Button onClick={incrementWaterLevel} className='update-btn'>
				<p>+</p>
			</Button>
		</div>
	);
};
