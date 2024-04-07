import { NutritionContainer } from '@/entities/nutritionContainer';
import { UpdateNutritions } from '@/features/updateNutritions';

export const CaloriesWidget = () => {
	return (
		<NutritionContainer>
			<UpdateNutritions name='Protein' />
			<UpdateNutritions name='Fats' />
			<UpdateNutritions name='Carbs' />
		</NutritionContainer>
	);
};
