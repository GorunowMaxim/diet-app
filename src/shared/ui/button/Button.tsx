import { ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, children, ...props }) => {
	return (
		<button className={`base-button ${className}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
