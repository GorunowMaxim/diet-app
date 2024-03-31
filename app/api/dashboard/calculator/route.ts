import { connectDB } from '@/shared/lib/mongodb';
import User from '@/shared/models/userModel';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

connectDB();

export async function POST(req: Request) {
	try {
		const reqBody = await req.json();

		const { weight, height, age, email, userName, password  } = reqBody;

		const user = await User.findOne({ email });
		const existUserName = await User.findOne({ userName });

		console.log(user, existUserName);

		if (existUserName) {
			return NextResponse.json({ error: 'User with this username already exists' }, {status: 400});
		}

		if (user) {
			return NextResponse.json({ error: 'User with this email already exists' }, {status: 400});
		}

		const salt = await bcryptjs.genSalt(10);
		const hashPassword = await bcryptjs.hash(password, salt);

		const newUser = new User({
			userName,
			email,
			password: hashPassword,
		});
		const savedUser = await newUser.save();

		return NextResponse.json({ message: 'User created', success: true, savedUser });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, {status: 500});
	}
}
