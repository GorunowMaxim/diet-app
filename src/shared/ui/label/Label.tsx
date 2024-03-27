import { LabelHTMLAttributes } from 'react';

const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = ({ className, children, ...props }) => {
	return (
		<label className={`base-label ${className}`} {...props}>
			{children}
		</label>
	);
};

export default Label;
