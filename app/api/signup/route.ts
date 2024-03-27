import { connectDB } from '@/shared/lib/mongodb';
import User from '@/shared/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

connectDB();

export async function POST(req: Request) {
	try {
		const reqBody = await req.json();

		const { userName, email, password } = reqBody;

		// const user = await User.findOne({ email });

		// if (user) {
		// 	NextResponse.json({ error: 'User already exists' });
		// 	return;
		// }

		const salt = await bcryptjs.genSalt(10);
		const hashPassword = await bcryptjs.hash(password, salt);

		const newUser = new User({
			userName,
			email,
			password: hashPassword,
		});
		const savedUser = await newUser.save();
		console.log(newUser);

		return NextResponse.json({ message: 'User created', success: true, savedUser });
	} catch (error: any) {
		return NextResponse.json({ error: error.message });
	}
}
