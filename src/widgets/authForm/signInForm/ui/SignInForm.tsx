import { AuthContainer } from '@/entities/authContainer';
import { SignInUser } from '@/features/auth';

export const SignInForm = () => {
	return (
		<AuthContainer variant='sign-in'>
			<SignInUser />
		</AuthContainer>
	);
};
