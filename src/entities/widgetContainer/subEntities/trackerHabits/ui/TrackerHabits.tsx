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

function createData(
	name: string,
	monday: 'check' | 'cross',
	tuesday: 'check' | 'cross',
	wensday: 'check' | 'cross',
	thursday: 'check' | 'cross',
	friday: 'check' | 'cross',
	satturday: 'check' | 'cross',
	sunday: 'check' | 'cross'
) {
	return { name, monday, tuesday, wensday, thursday, friday, satturday, sunday };
}

const rows = [
	createData('water', 'check', 'cross', 'check', 'cross', 'cross', 'cross', 'check'),
	createData('nutritions', 'check', 'cross', 'check', 'cross', 'cross', 'cross', 'check'),
	createData('ckal', 'check', 'cross', 'check', 'cross', 'cross', 'cross', 'check'),
	createData('daily challenge', 'check', 'cross', 'check', 'cross', 'cross', 'cross', 'check'),
];

export const imgCheck = ({ type, className }: { type: 'check' | 'cross'; className?: string }) => {
	return type === 'check' ? (
		<img className={`check-icon ${className}`} src='/images/check.svg' alt='check' />
	) : (
		<img className={`check-icon ${className}`} src='/images/cross.svg' alt='cross' />
	);
};

const days = ['M', 'T', 'W', 'Th', 'F', 'St', 'S'];

export const TrackerHabits = () => {
	return (
		<WidgetContainer type='small' variants={topItem}>
			<CustomTooltip title={tolltipText} />
			<TableContainer className='tracker-container'>
				<h3 className='tracker-headline'>Tracker habits</h3>
				<Table className='tracker-table' aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell className='tracker-table__thead-item'></TableCell>
							{days.map((day, index) => {
								return (
									<TableCell key={index} className='tracker-table__thead-item' align='center'>
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
								<TableCell
									className='tracker-table__tbody-item'
									component='th'
									scope='row'
									align='center'
								>
									{imgCheck({ type: row.monday, className: 'tracker-table__icon' })}
								</TableCell>
								<TableCell
									className='tracker-table__tbody-item'
									component='th'
									scope='row'
									align='center'
								>
									{imgCheck({ type: row.tuesday, className: 'tracker-table__icon' })}
								</TableCell>
								<TableCell
									className='tracker-table__tbody-item'
									component='th'
									scope='row'
									align='center'
								>
									{imgCheck({ type: row.wensday, className: 'tracker-table__icon' })}
								</TableCell>
								<TableCell
									className='tracker-table__tbody-item'
									component='th'
									scope='row'
									align='center'
								>
									{imgCheck({ type: row.thursday, className: 'tracker-table__icon' })}
								</TableCell>
								<TableCell
									className='tracker-table__tbody-item'
									component='th'
									scope='row'
									align='center'
								>
									{imgCheck({ type: row.friday, className: 'tracker-table__icon' })}
								</TableCell>
								<TableCell
									className='tracker-table__tbody-item'
									component='th'
									scope='row'
									align='center'
								>
									{imgCheck({ type: row.satturday, className: 'tracker-table__icon' })}
								</TableCell>
								<TableCell
									className='tracker-table__tbody-item'
									component='th'
									scope='row'
									align='center'
								>
									{imgCheck({ type: row.sunday, className: 'tracker-table__icon' })}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</WidgetContainer>
	);
};
