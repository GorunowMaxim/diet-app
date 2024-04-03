import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/shared/lib/mongodb';
import getDataFromToken from '@/shared/lib/utils/getDataFromToken';
import User from '@/shared/models/userModel';

connectDB();

export async function GET(req: NextRequest) {
	try {
		const userData = await getDataFromToken(req);
		const { id } = userData;
		const user = await User.findOne({ _id: id }).select('-password');
		return NextResponse.json({ data: user });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}
