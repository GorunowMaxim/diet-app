import { ReactNode } from 'react';
import './styles.scss';

const NutritionContainer = ({ children }: { children: ReactNode }) => {
	return (
		<div className='nutritions'>
			<div className='nutritions-wrapper'>
                {children}
            </div>
		</div>
	);
};

export default NutritionContainer;
