'use client';

import { useForm, SubmitHandler, FieldValues, UseFormRegister, RegisterOptions } from 'react-hook-form';

import Label from '@/shared/ui/label/Label';
import Input from '@/shared/ui/input/Input';

import { Inputs } from '@/shared/types/types';
import './styles.scss';

import Button from '@/shared/ui/button/Button';
import { ReactNode } from 'react';

interface BodyInputs {
	[index: string]: {
		[index: string]: string;
	};
}

const bodyInputs: BodyInputs = {
	age: {
		placeholder: 'Age',
		name: 'age',
	},
	height: {
		placeholder: 'Height',
		name: 'height',
	},
	weight: {
		placeholder: 'Weight',
		name: 'weight',
	},
};

interface ActivityInputs {
	[index: string]: {
		value: string;
		img: string;
		headline: string;
		desc: string;
	};
}

const activityInputs: ActivityInputs = {
	sedentary: {
		value: '1.2',
		img: '/images/sit.svg',
		headline: 'Sedentary',
		desc: 'You get no formal exercise and are not physically active during the day',
	},
	дightly: {
		value: '1.375',
		img: '/images/walk.svg',
		headline: 'Lightly active',
		desc: 'Your perform lifestyle activities, like taking the dog for a walk or gardering',
	},
	moderately: {
		value: '1.55',
		img: '/images/run.svg',
		headline: 'Moderately active',
		desc: 'Your participate in cardio exercises for 20 to 60 minutes, 3 to 5 days per week',
	},
	very: {
		value: '1.725',
		img: '/images/hardtrain.svg',
		headline: 'Very active',
		desc: 'Your exercise for 20 to 60 minutes almost every day',
	},
};

interface RadioInputProps {
	register: UseFormRegister<FieldValues>;
	nameRegister: string;
	value: string;
	nameButton?: string;
	params: RegisterOptions;
	children: ReactNode;
}

const RadioInput: React.FC<RadioInputProps> = ({ register, value, nameRegister, params, children }) => {
	return (
		<>
			<Input
				value={value}
				type='radio'
				{...register(nameRegister, { ...params })}
				className='calculator__radio-input'
			/>
			{children}
		</>
	);
};

interface FormBlockProps {
	name: string;
	children: ReactNode;
}

const FormBlock: React.FC<FormBlockProps> = ({ name, children }) => {
	return (
		<div className='calculator-form__block'>
			<h3 className='calculator-form__block-headline'>{name}</h3>
			<div className='calculator-form__block-label'>{children}</div>
		</div>
	);
};

export const CalculateDietData = () => {
	const {
		register,
		handleSubmit,
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='calculator-form'>
			<div className='left-block'>
				<FormBlock name='1. Choose your sex'>
					<Label className='calculator__radio-label'>
						<RadioInput
							value='men'
							nameButton='men'
							register={register}
							nameRegister='sex'
							params={{ required: true }}
						>
							<span className='calculator__fake-radio'>
								<span className='calculator__fake-text'>men</span>
							</span>
						</RadioInput>
					</Label>
					<Label className='calculator__radio-label'>
						<RadioInput
							value='women'
							nameButton='women'
							register={register}
							nameRegister='sex'
							params={{ required: true }}
						>
							<span className='calculator__fake-radio'>
								<span className='calculator__fake-text'>women</span>
							</span>
						</RadioInput>
					</Label>
				</FormBlock>
				<FormBlock name='2. Write your parametrs'>
					{Object.keys(bodyInputs).map((el, index) => {
						const input = bodyInputs[el];
						return (
							<Label key={index} className='calculator-form__body-label'>
								<Input
									type='number'
									className='calculator-form__body-input'
									placeholder={input.placeholder}
									{...register(input.name, { required: true })}
								/>
							</Label>
						);
					})}
				</FormBlock>
				<FormBlock name='3. Your goal'>
					<Label className='calculator__radio-label'>
						<RadioInput
							value='lose weight'
							nameButton='lose weight'
							register={register}
							nameRegister='goal'
							params={{ required: true }}
						>
							<span className='calculator__fake-radio'>
								<span className='calculator__fake-text'>lose weight</span>
							</span>
						</RadioInput>
					</Label>
					<Label className='calculator__radio-label'>
						<RadioInput
							value='get weight'
							nameButton='get weight'
							register={register}
							nameRegister='goal'
							params={{ required: true }}
						>
							<span className='calculator__fake-radio'>
								<span className='calculator__fake-text'>get weight</span>
							</span>
						</RadioInput>
					</Label>
				</FormBlock>
			</div>
			<div className='right-block'>
				<h3>4. Choose more comfortable activity for yourself</h3>
				<div className='calculator-form__activity'>
					{Object.keys(activityInputs).map((el, index) => {
						const input = activityInputs[el];
						return (
							<Label key={index} className='calculator__radio-label'>
								<RadioInput
									value={input.value}
									register={register}
									nameRegister='activity'
									params={{ required: true }}
								>
									<div className='activity__fake-radio'>
										<div className='activity__fake-block'>
											<img src={input.img} alt='' className='activity__fake-img' />
										</div>
										<div className='activity__fake-info'>
											<h4 className='activity__fake-headline'>{input.headline}</h4>
											<p className='activity__fake-text'>{input.desc}</p>
										</div>
									</div>
								</RadioInput>
							</Label>
						);
					})}
				</div>
			</div>
			<Button className='calculator-button'>Calculate</Button>
		</form>
	);
};
