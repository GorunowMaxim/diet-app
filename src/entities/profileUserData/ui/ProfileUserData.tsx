import { ProfileUserDataProps } from '@/shared/types/types';

import './styles.scss';

export const ProfileUserData = ({ userName, email, extendData }: ProfileUserDataProps) => {
	return (
		<div className='user-data'>
			<div className='user-data__photo'></div>
			<div className='user-data__data'>
				<p className='user-data__data-block'>
					<span className='user-data__data-text user-data__data-text_bold'>{userName}</span>
					<span className='user-data__data-text'>
						{extendData?.firstName ? extendData.firstName : 'name'},{' '}
						{extendData?.age ? `${extendData.age} years old` : 'age'}
					</span>
					<span className='user-data__data-text'>{email}</span>
				</p>
			</div>
			{extendData?.about ? (
				<div className='user-data__about'>
					<h3>About</h3>
					<p>{extendData.about}</p>
				</div>
			) : null}
		</div>
	);
};

