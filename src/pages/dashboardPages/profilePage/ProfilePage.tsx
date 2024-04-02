'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

import ProfileUserData from '@/entities/profileUserData/ui/ProfileUserData';
import ProfilePageTabs from '@/widgets/profilePageTabSection/ProfilePageTabs';

import { ProfileUserDataProps } from '@/shared/types/types';

import './styles.scss';
import { useAppDispatch } from '@/shared/lib/hooks';
import { fetchUserData } from '@/app/store/slices/user/userSlice';

const ProfilePage = () => {
	const [data, setData] = useState<ProfileUserDataProps>();
	console.log(data);

	useEffect(() => {
		const fetchingData = async () => {
			try {
				const response = await axios.get('/api/user');
				setData(response.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchingData();
	}, []);

	return (
		<section className='profile'>
			<div className='profile-wrapper'>
				<div className='profile-header'>
					<ProfileUserData userName={data?.userName} email={data?.email} extendData={data?.extendData} />
				</div>
				<div className='profile-body'>
					<ProfilePageTabs />
				</div>
			</div>
		</section>
	);
};

export default ProfilePage;
