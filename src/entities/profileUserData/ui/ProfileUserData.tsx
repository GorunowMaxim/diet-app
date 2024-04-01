
import './styles.scss'

interface ProfileUserDataProps {
	[index: string]: string | number;
}

const ProfileUserData: React.FC<ProfileUserDataProps> = ({userName, name, age, email}) => {
	return (
		<div className='user-data'>
			<div className='user-data__photo'></div>
			<div className='user-data__data'>
				<p className='user-data__data-block'>
					<span className='user-data__data-text user-data__data-text_bold'>{userName}</span>
					<span className='user-data__data-text'>{name}, {age}</span>
					<span className='user-data__data-text'>{email}</span>
				</p>
			</div>
		</div>
	);
};

export default ProfileUserData;
