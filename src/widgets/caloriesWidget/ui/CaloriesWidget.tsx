
import { CaloriesWidgetContainer } from '@/entities/widgetContainer';
import { UpdateCalories } from '@/features/updateCalories';

export const CaloriesWidget = () => {
	return (
		<CaloriesWidgetContainer>
			<UpdateCalories />
			<UpdateCalories />
		</CaloriesWidgetContainer>
	);
};
