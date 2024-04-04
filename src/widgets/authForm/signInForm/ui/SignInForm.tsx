import AuthContainer from '@/entities/authContainer/ui/AuthContainer';
import SignInUser from '@/features/auth/signIn/ui/SignInUser';

const SignInForm = () => {
	return (
		<AuthContainer variant='sign-in'>
			<SignInUser />
		</AuthContainer>
	);
};

export default SignInForm;
