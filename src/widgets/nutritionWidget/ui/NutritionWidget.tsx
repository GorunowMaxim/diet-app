import { NutritionWidgetContainer } from '@/entities/widgetContainer';
import { UpdateNutritions } from '@/features/updateNutritions';
import CustomTooltip from '@/shared/ui/tooltip/Tooltip';

const tooltipText: string = 'This is your cap of daily nutritions';

export const NutritionWidget = ({protein, fats, carbs}: {protein: string, fats: string, carbs: string}) => {
	return (
		<NutritionWidgetContainer>
			<CustomTooltip title={tooltipText} />
			<UpdateNutritions maxNutritionValue={protein} name='Protein' />
			<UpdateNutritions maxNutritionValue={fats} name='Fats' />
			<UpdateNutritions maxNutritionValue={carbs} name='Carbs' />
		</NutritionWidgetContainer>
	);
};
