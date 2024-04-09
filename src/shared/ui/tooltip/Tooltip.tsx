import { Tooltip, Zoom } from '@mui/material';

const CustomTooltip = ({ title }: { title: string }) => {
	return (
		<Tooltip className='tooltip' placement='bottom-end' TransitionComponent={Zoom} title={title}>
			<img src='/images/question.svg' alt='' />
		</Tooltip>
	);
};

export default CustomTooltip;
