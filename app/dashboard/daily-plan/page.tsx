import { Tilt_Neon } from 'next/font/google';

import { DailyPlanPage } from '@/pages/dashboardPages';

const neon = Tilt_Neon({ subsets: ['latin'] });

const DailyPlan = () => {
	return (
		<div className={neon.className}>
			<DailyPlanPage />
		</div>
	);
};

export default DailyPlan;
