'use client';

import { useState } from 'react';


import { UpdateWaterWidget } from '@/features/updateWaterWidget';
import { WaterWidgetContainer } from '@/entities/widgetContainer';

export const WaterWidget = () => {
	const [waterLevel, setWaterLevel] = useState<number>(100);
	const [count, setCount] = useState<number>(0);
	const [maxCount, setMaxCount] = useState<number>(10);
	const diffNumber = 10;

	return (
		<>
			<WaterWidgetContainer waterLevel={waterLevel} count={count} maxCount={maxCount}>
				<UpdateWaterWidget
					waterLevel={waterLevel}
					setWaterLevel={setWaterLevel}
					diffNumber={diffNumber}
					setCount={setCount}
					count={count}
				/>
			</WaterWidgetContainer>
		</>
	);
};
