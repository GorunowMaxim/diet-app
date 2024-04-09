import { CaloriesWidgetContainer } from '@/entities/widgetContainer';
import { UpdateCalories } from '@/features/updateCalories';
import CustomTooltip from '@/shared/ui/tooltip/Tooltip';

const tooltipText: string = 'This is your cap of daily calories';

export const CaloriesWidget = () => {
	return (
		<CaloriesWidgetContainer>
			<CustomTooltip title={tooltipText} />
			<UpdateCalories />
		</CaloriesWidgetContainer>
	);
};
