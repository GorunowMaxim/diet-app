import NutritionContainer from '@/entities/nutritionContainer/ui/NutritionContainer';
import UpdateNutritions from '@/features/updateNutritions/ui/UpdateNutritions';

const CaloriesWidget = () => {
	return (
		<NutritionContainer>
			<UpdateNutritions name='Fats' />
			<UpdateNutritions name='Fats' />
			<UpdateNutritions name='Fats' />
		</NutritionContainer>
	);
};

export default CaloriesWidget;
