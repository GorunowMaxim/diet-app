'use client';

import { useState } from 'react';

import { UpdateWaterWidget } from '@/features/updateWaterWidget';
import { WaterWidgetContainer } from '@/entities/widgetContainer';
import CustomTooltip from '@/shared/ui/tooltip/Tooltip';

const tooltipText: string = 'This is your cap of daily water glasses. 1 glass = 300ml of water';

interface WaterWidgetProps {
	water: string;
}

export const WaterWidget: React.FC<WaterWidgetProps> = ({ water }) => {
	const [waterLevel, setWaterLevel] = useState<number>(100);
	const [count, setCount] = useState<number>(0);
	const diffNumber = 100 / Number(water);

	return (
		<>
			<WaterWidgetContainer waterLevel={waterLevel} count={count} maxCount={Number(water)}>
				<CustomTooltip title={tooltipText} />
				<UpdateWaterWidget
					waterLevel={waterLevel}
					setWaterLevel={setWaterLevel}
					diffNumber={diffNumber}
					setCount={setCount}
					count={count}
					maxCount={Number(water)}
				/>
			</WaterWidgetContainer>
		</>
	);
};
