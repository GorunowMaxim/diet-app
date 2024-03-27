import { FormHTMLAttributes } from 'react';

const Form: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({ className, children, ...props }) => {
	return (
		<form className={`form-basis ${className}`} {...props}>
			{children}
		</form>
	);
};

export default Form;
