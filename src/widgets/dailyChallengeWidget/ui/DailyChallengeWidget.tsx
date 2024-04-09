import { useState } from 'react';

import { DailyChallengeContainer, WidgetContainer } from '@/entities/widgetContainer';
import { UpdateInputValue } from '@/features/updateInputValue';
import CustomTooltip from '@/shared/ui/tooltip/Tooltip';

import './styles.scss';

const botItem = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const tooltipText: string = 'This is your special daily challenge to increase yourself';

export const DailyChallengeWidget = () => {
	const [stepsCount, setStepsCount] = useState<number>(0);
	const [maxStepsCount, setMaxStepsCount] = useState<number>(100);

	return (
		<WidgetContainer type='small' variants={botItem}>
			<CustomTooltip title={tooltipText} />
			<div className='daily-widget-container'>
				<h3 className='daily-widget__headline'>Daily challenge</h3>
				<DailyChallengeContainer>
					<UpdateInputValue
						setInputValue={setStepsCount}
						currentValue={stepsCount}
						maxValue={maxStepsCount}
					/>
				</DailyChallengeContainer>
				<DailyChallengeContainer>
					<UpdateInputValue
						setInputValue={setStepsCount}
						currentValue={stepsCount}
						maxValue={maxStepsCount}
					/>
				</DailyChallengeContainer>
			</div>
		</WidgetContainer>
	);
};
