import {FC, InputHTMLAttributes} from 'react';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
}

const Input: FC<Input> = ({name, label, ...rest}) => {
	return (
		<div className="input-block">
			<label htmlFor={name}>{label}</label>
			<input type="text" id={name} {...rest}/>
		</div>
	);
}

export default Input;
