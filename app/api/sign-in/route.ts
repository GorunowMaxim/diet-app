import { connectDB } from '@/shared/lib/mongodb';
import { NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/shared/models/userModel';

connectDB();

export async function POST(req: Request) {
	try {
		const reqBody = await req.json();
		const { email, password } = reqBody;

		const user = await User.findOne({ email });

		if (!user) {
			return NextResponse.json({ error: 'User does not exist' }, { status: 400 });
		}

		const validPassword = await bcryptjs.compare(password, user.password);

		if (!validPassword) {
			return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
		}

		const tokenData = {
			id: user._id,
			username: user.userName,
			email: user.email,
		};

		const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

		const response = NextResponse.json({ message: 'Log in successful', success: true });
		response.cookies.set('token', token, { httpOnly: true });
		return response;
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
