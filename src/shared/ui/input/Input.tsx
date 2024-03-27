import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
	return <input ref={ref} type={type} {...props} className={`input-base ${className}`} />;
});

export default Input;
