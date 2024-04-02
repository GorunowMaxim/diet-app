import { ProfileUserDataProps } from '@/shared/types/types';

import './styles.scss';

const ProfileUserData = ({ userName, email, extendData }: ProfileUserDataProps) => {

	return (
		<div className='user-data'>
			<div className='user-data__photo'></div>
			<div className='user-data__data'>
				<p className='user-data__data-block'>
					<span className='user-data__data-text user-data__data-text_bold'>{userName}</span>
					<span className='user-data__data-text'>
						{extendData ? extendData.firstName : 'name'}, {extendData ? extendData.age : 'age'}
					</span>
					<span className='user-data__data-text'>{email}</span>
				</p>
			</div>
		</div>
	);
};

export default ProfileUserData;
