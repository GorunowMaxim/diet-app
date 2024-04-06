import { ReactNode } from 'react';
import './styles.scss';

const NutritionContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className='nutritions'>
			<div className='nutritions-wrapper'>
				<h3 className='nutritions-wrapper__headline'>This is your nutritions cap for a day</h3>
				{children}
			</div>
		</div>
	);
};

export default NutritionContainer;
