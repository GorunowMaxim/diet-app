import NutritionContainer from '@/entities/nutritionContainer/ui/NutritionContainer';
import UpdateNutritions from '@/features/updateNutritions/ui/UpdateNutritions';

const CaloriesWidget = () => {
	return (
		<NutritionContainer>
			<UpdateNutritions name='Protein' />
			<UpdateNutritions name='Fats' />
			<UpdateNutritions name='Carbs' />
		</NutritionContainer>
	);
};

export default CaloriesWidget;
