import { AuthContainer } from '@/entities/authContainer';
import { SignUpUser } from '@/features/auth';

export const SignUpForm = () => {
	return (
		<AuthContainer variant='sign-up'>
			<SignUpUser />
		</AuthContainer>
	);
};
