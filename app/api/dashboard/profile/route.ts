import getDataFromToken from '@/shared/lib/getDataFromToken';
import { connectDB } from '@/shared/lib/mongodb';
import User from '@/shared/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function PATCH(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const userData = await getDataFromToken(req);
		const { id } = userData;
		const { userName, email, firstName, lastName, country, dateOfBirth } = reqBody;

		const user = await User.findOne({ _id: id });

		user.userName = userName;
		user.email = email;
		user.extendData.firstName = firstName;
		user.extendData.lastName = lastName;
		user.extendData.country = country;
		user.extendData.dateOfBirth = dateOfBirth;
		console.log('saved', user);
		const savedUser = await user.save();

		return NextResponse.json({ message: 'User changed', success: true });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
