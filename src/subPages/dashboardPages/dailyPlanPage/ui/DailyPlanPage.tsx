'use client';
import { motion } from 'framer-motion';

import WaterWidget from '@/widgets/waterWidget/ui/WaterWidget';

import './styles.scss';

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const DailyPlanPage = () => {
	return (
		<div className='daily-plan'>
			<motion.div variants={container} initial='hidden' animate='visible' className='daily-plan__wrapper'>
				<motion.div variants={item}>
					<WaterWidget />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default DailyPlanPage;
