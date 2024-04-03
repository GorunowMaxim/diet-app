import SignInForm from '@/widgets/authForm/signInForm/ui/SignInForm';
import AuthPageWrapper from '../AuthPageWrapper';

import '../styles.scss';

const SignInPage = () => {
	return (
		<AuthPageWrapper>
			<SignInForm />
		</AuthPageWrapper>
	);
};

export default SignInPage;
