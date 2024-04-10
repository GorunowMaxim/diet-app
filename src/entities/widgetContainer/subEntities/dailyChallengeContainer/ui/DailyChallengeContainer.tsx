import { ReactNode } from 'react';

import './styles.scss';

const botItem = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const DailyChallengeContainer = ({ children, src }: { children: ReactNode; src: string }) => {
	return (
		<div className='daily-challenge-widget'>
			<div className='daily-challenge__img-block'>
				<img className='daily-challenge__img' src={src} alt='' />
			</div>
			{children}
		</div>
	);
};
