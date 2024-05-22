import AuthPageWrapper from '../../AuthPageWrapper';
import { SignInForm } from '@/widgets/authForm';

export const SignInPage = () => {
	return (
		<AuthPageWrapper>
			<SignInForm />
		</AuthPageWrapper>
	);
};
