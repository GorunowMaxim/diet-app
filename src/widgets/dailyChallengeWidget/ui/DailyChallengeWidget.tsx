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

const Congrats = () => {
	return (
		<div className='grats'>
			<p className='grats-text'>Nice work! Keep up the pressure {'\u{1F44D}'}</p>
		</div>
	);
};

const tooltipTextCommon: string = 'This is your special daily challenge to increase yourself';
const tooltipTextGym: string = 'This is time to physical activity for a day in minutes';
const tooltipTextSteps: string = 'This is steps count for a day';

export const DailyChallengeWidget = ({ maxStepsCount, maxMinutes }: { maxStepsCount: string; maxMinutes: string }) => {
	const [stepsCount, setStepsCount] = useState<number>(0);

	const [minutes, setMinutes] = useState<number>(0);

	return (
		<WidgetContainer type='small' variants={botItem}>
			<CustomTooltip title={tooltipTextCommon} />
			<div className='daily-widget-container'>
				<h3 className='daily-widget__headline'>Daily challenge</h3>
				<DailyChallengeContainer src='/images/gym.svg'>
					<CustomTooltip title={tooltipTextGym} />
					{minutes == Number(maxMinutes) || minutes > Number(maxMinutes) ? (
						<Congrats />
					) : (
						<UpdateInputValue
							setInputValue={setMinutes}
							currentValue={minutes}
							maxValue={Number(maxMinutes)}
						/>
					)}
				</DailyChallengeContainer>
				<DailyChallengeContainer src='/images/step.svg'>
					<CustomTooltip title={tooltipTextSteps} />
					{stepsCount === Number(maxStepsCount) || stepsCount > Number(maxStepsCount) ? (
						<Congrats />
					) : (
						<UpdateInputValue
							setInputValue={setStepsCount}
							currentValue={stepsCount}
							maxValue={Number(maxStepsCount)}
						/>
					)}
				</DailyChallengeContainer>
			</div>
		</WidgetContainer>
	);
};
