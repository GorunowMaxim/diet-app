import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, type, ...props }) => {
	return <input type={type} {...props} className={`input-base ${className}`} />;
};

export default Input;
