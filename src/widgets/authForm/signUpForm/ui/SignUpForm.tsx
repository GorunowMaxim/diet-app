import AuthContainer from '@/entities/authContainer/ui/AuthContainer';
import SignUpUser from '@/features/signUp/ui/SignUpUser';

const SignUpForm = () => {
	return (
		<AuthContainer variant='sign-up'>
			<SignUpUser />
		</AuthContainer>
	);
};

export default SignUpForm;
