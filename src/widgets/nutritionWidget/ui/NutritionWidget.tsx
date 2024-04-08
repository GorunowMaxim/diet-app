import { NutritionWidgetContainer } from '@/entities/widgetContainer';
import { UpdateNutritions } from '@/features/updateNutritions';

export const NutritionWidget = () => {
	return (
		<NutritionWidgetContainer>
			<UpdateNutritions name='Protein' />
			<UpdateNutritions name='Fats' />
			<UpdateNutritions name='Carbs' />
		</NutritionWidgetContainer>
	);
};
