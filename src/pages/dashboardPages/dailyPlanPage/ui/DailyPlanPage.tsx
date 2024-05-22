'use client';

import axios from 'axios';
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';

import { WaterWidget } from '@/widgets/waterWidget';
import { NutritionWidget } from '@/widgets/nutritionWidget';
import { CaloriesWidget } from '@/widgets/caloriesWidget';
import { DailyChallengeWidget } from '@/widgets/dailyChallengeWidget';
import { TrackerHabitsWidget } from '@/widgets/trackerHabitsWidget/ui/TrackerHabitsWidget';

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

interface DailyData {
	[index: string]: string;
}

export const DailyPlanPage = () => {
	const [dailyData, setData] = useState<DailyData>();

	useEffect(() => {
		const fetchingData = async () => {
			const response = await axios.get('/api/user');
			setData(response.data.data.dailyPlan);
		};
		fetchingData();
		console.log(dailyData);
	}, []);

	const water = dailyData ? dailyData.water : '10';
	const protein = dailyData ? dailyData.protein : '100';
	const carbs = dailyData ? dailyData.carbs : '100';
	const fats = dailyData ? dailyData.fats : '100';
	const walk = dailyData ? dailyData.walk : '100';
	const gymTime = dailyData ? dailyData.gymTime : '100';
	const ckal = dailyData ? dailyData.ckal : '100';

	return (
		<div className='daily-plan'>
			<motion.div variants={container} initial='hidden' animate='visible' className='daily-plan__wrapper'>
				<WaterWidget water={water} />
				<NutritionWidget protein={protein} fats={fats} carbs={carbs} />
				<CaloriesWidget maxCalories={ckal} />
				<DailyChallengeWidget maxStepsCount={walk} maxMinutes={gymTime} />
				<TrackerHabitsWidget />
			</motion.div>
		</div>
	);
};
