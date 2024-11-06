import { Icon } from '@iconify/react/dist/iconify.js';
import {
	CustomInputTextField,
	CustomSelectField,
} from '../components/shared/custom-text-field';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CustomButton } from '../components/shared/shared_customs';
import { blockInvalidChar } from '@/utils/helper';

const passwordValidation = new RegExp(
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
);

const signupSchema = z
	.object({
		email: z.string().email({ message: 'Please enter a valid email address' }),
		phoneNumber: z
			.string()
			.refine(
				(value) => /^[0-9]{10}$/.test(value),
				'Phone number must be a 10-digit number',
			),
		businessType: z.string().min(3, 'Business type is required'),
		password: z
			.string()
			.min(8, 'Password must be at least 8 characters long')
			.regex(passwordValidation, {
				message:
					'Password must contain at least one uppercase, one lowercase and one number.',
			}),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

const SignUp = () => {
	const {
		formState: { errors },
		handleSubmit,
		register,
		getValues,
		watch,
	} = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
	});

	watch();

	const onSubmit = async (data: z.infer<typeof signupSchema>) => {
		console.log(data);
	};

	return (
		<main>
			<div className="bg-green-100 flex items-center text-xs justify-center gap-x-2 py-1 mt-2">
				<Icon icon="cbi:adguard" color="#077929" />
				<p>Your information is protected</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className="p-3 px-10 space-y-5">
				{data.map((item, index) => {
					const fieldName = item.name as keyof z.infer<typeof signupSchema>;

					return item.type === 'select' ? (
						<CustomSelectField
							key={index}
							label={item.label}
							inputProps={{
								...register(fieldName),
							}}
							error={errors[fieldName]?.message as string}
							options={
								item.options as
									| string[]
									| Array<{ label: string; value: string }>
							}
							value={getValues()[fieldName]}
						/>
					) : (
						<CustomInputTextField
							key={index}
							inputProps={{
								...register(fieldName),
							}}
							onKeyDown={item.type === 'number' ? blockInvalidChar : undefined}
							error={errors[fieldName]?.message as string}
							label={item.label}
							type={item.type as 'number' | 'text' | undefined}
							value={getValues()[fieldName]}
						/>
					);
				})}

				<div className="w-full pt-2 pb-3">
					<CustomButton
						type="submit"
						className=" bg-foundry-primary text-white w-full text-base">
						Submit
					</CustomButton>
				</div>
			</form>
		</main>
	);
};

export default SignUp;

const data = [
	{
		label: 'Email Address',
		name: 'email',
		type: 'text',
	},
	{
		label: 'phone Number',
		name: 'phoneNumber',
		type: 'number',
	},
	{
		label: 'Password',
		name: 'password',
		type: 'password',
	},
	{
		label: 'Confirm Password',
		name: 'confirmPassword',
		type: 'password',
	},
	{
		label: 'business type',
		name: 'businessType',
		type: 'select',
		options: ['Financial Services', 'Schools', 'Restaurants', 'Retails'],
	},
];
