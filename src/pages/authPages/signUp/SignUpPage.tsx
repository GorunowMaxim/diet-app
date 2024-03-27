import AuthPageWrapper from '../AuthPageWrapper';
import SignUpForm from '@/widgets/userForm/signUpForm/ui/SignUpForm';

import '../styles.scss';

const SignUnPage = () => {
	return (
		<AuthPageWrapper>
			<SignUpForm />
		</AuthPageWrapper>
	);
};

export default SignUnPage;
