import ProfileUserData from '@/entities/profileUserData/ui/ProfileUserData';
import ProfilePageTabs from '@/widgets/profilePageTabSection/ProfilePageTabs';

import './styles.scss';

const ProfilePage = () => {
	return (
		<section className='profile'>
			<div className='profile-wrapper'>
				<div className='profile-header'>
					<ProfileUserData userName='userName' name='name' age={19} email='sdfsdf@sdf.rt' />
				</div>
				<div className='profile-body'>
					<ProfilePageTabs />
				</div>
			</div>
		</section>
	);
};

export default ProfilePage;
