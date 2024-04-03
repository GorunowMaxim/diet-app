import getDataFromToken from '@/shared/lib/utils/getDataFromToken';
import { connectDB } from '@/shared/lib/mongodb';
import User from '@/shared/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import getUserAge from '@/shared/lib/utils/getUserAge';

connectDB();

export async function PATCH(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const userData = await getDataFromToken(req);
		const { id } = userData;
		const { userName, email, firstName, lastName, country, dateOfBirth, about } = reqBody;

		const user = await User.findOne({ _id: id });

		if (userName !== '') {
			user.userName = userName;
		}

		if (email !== '') {
			user.email = email;
		}

		if (firstName !== '') {
			user.extendData.firstName = firstName;
		}

		if (lastName !== '') {
			user.extendData.lastName = lastName;
		}

		if (country !== '') {
			user.extendData.country = country;
		}

		if (about !== '') {
			user.extendData.about = about;
		}

		if (dateOfBirth !== '') {
			user.extendData.dateOfBirth = dateOfBirth;
			user.extendData.age = getUserAge(dateOfBirth);
		}

		const savedUser = await user.save();

		return NextResponse.json({ message: 'User changed', success: true });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
