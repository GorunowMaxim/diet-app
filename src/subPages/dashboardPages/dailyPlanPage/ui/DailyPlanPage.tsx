'use client';

import { motion } from 'framer-motion';

import { WaterWidget } from '@/widgets/waterWidget';
import { NutritionWidget } from '@/widgets/nutritionWidget';
import { CaloriesWidget } from '@/widgets/caloriesWidget';
import { DailyChallengeWidget } from '@/widgets/dailyChallengeWidget';

import './styles.scss';
import { TrackerHabitsWidget } from '@/widgets/trackerHabitsWidget/ui/TrackerHabitsWidget';

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

export const DailyPlanPage = () => {
	return (
		<div className='daily-plan'>
			<motion.div variants={container} initial='hidden' animate='visible' className='daily-plan__wrapper'>
				<WaterWidget />
				<NutritionWidget />
				<CaloriesWidget />
				<DailyChallengeWidget />
				<TrackerHabitsWidget />
			</motion.div>
		</div>
	);
};
