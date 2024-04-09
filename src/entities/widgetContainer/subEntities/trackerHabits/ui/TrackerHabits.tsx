import { WidgetContainer } from '@/entities/widgetContainer';
import CustomTooltip from '@/shared/ui/tooltip/Tooltip';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import './styles.scss';

const topItem = {
	hidden: { x: 20, opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,
	},
};

const tolltipText: string = 'This is your habits of the last week';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('water', 159, 6.0, 24, 4.0),
	createData('nutritions', 237, 9.0, 37, 4.3),
	createData('ckal', 262, 16.0, 24, 6.0),
	createData('daily challenge', 305, 3.7, 67, 4.3),
];

const imgCheck = ({ type, className }: { type: string; className: string }) => {
	return type === 'check' ? 
    <img className={className} src='/images/check.svg' alt='' /> : 
    <img className={className} src='/images/check.svg' alt='' />;
};

const days = ['M', 'T', 'W', 'Th', 'F', 'St', 'S'];

export const TrackerHabits = () => {
	return (
		<WidgetContainer type='small' variants={topItem}>
			<CustomTooltip title={tolltipText} />
			<TableContainer className='tracker-container'>
				<Table className='tracker-table' aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell className='tracker-table__thead-item'></TableCell>
							{days.map((day, index) => {
								return (
									<TableCell key={index} className='tracker-table__thead-item' align='right'>
										{day}
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell className='tracker-table__tbody-item' component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell className='tracker-table__tbody-item' align='right'>
									{row.calories}
								</TableCell>
								<TableCell className='tracker-table__tbody-item' align='right'>
									{row.fat}
								</TableCell>
								<TableCell className='tracker-table__tbody-item' align='right'>
									{row.carbs}
								</TableCell>
								<TableCell className='tracker-table__tbody-item' align='right'>
									{row.protein}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</WidgetContainer>
	);
};
