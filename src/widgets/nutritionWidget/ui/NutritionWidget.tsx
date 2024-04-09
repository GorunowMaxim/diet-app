import { NutritionWidgetContainer } from '@/entities/widgetContainer';
import { UpdateNutritions } from '@/features/updateNutritions';
import CustomTooltip from '@/shared/ui/tooltip/Tooltip';

const tooltipText: string = 'This is your cap of daily nutritions';

export const NutritionWidget = () => {
	return (
		<NutritionWidgetContainer>
			<CustomTooltip title={tooltipText} />
			<UpdateNutritions name='Protein' />
			<UpdateNutritions name='Fats' />
			<UpdateNutritions name='Carbs' />
		</NutritionWidgetContainer>
	);
};
