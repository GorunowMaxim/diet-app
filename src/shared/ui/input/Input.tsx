import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return <input ref={ref} type={type} {...props} className={`input-base ${className}`} />;
});

export default Input;
