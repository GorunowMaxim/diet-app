import { connectDB } from '@/shared/lib/mongodb';
import getDataFromToken from '@/shared/lib/utils/getDataFromToken';
import User from '@/shared/models/userModel';
import { NextRequest, NextResponse } from 'next/server';

connectDB();

export async function PATCH(req: NextRequest) {
	try {
		const reqBody = await req.json();
		const userData = await getDataFromToken(req);
		const { id } = userData;

		const user = await User.findOne({ _id: id });
		const { activity, goal, weight, height, age, sex } = reqBody;
		let result;

		if (sex === 'men') {
			const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
			result = bmr * Number(activity);
		} else {
			const bmr = 10 * weight + 6.25 * height - 5 * age - 161;
			result = bmr * Number(activity);
		}

		if (goal === 'get weight') {
			result += 500;
		} else {
			result -= 500;
		}

		const protein = (result * 0.2) / 4;
		const fats = (result * 0.3) / 9;
		const carbs = (result * 0.5) / 4;
		const glasses = (weight * 0.035) / 0.3;

		user.dailyPlan.ckal = Math.round(result);
		user.dailyPlan.protein = Math.round(protein);
		user.dailyPlan.fats = Math.round(fats);
		user.dailyPlan.carbs = Math.round(carbs);
		user.dailyPlan.water = Math.round(glasses);


		console.log('result', result);
		const savedUser = await user.save();

		return NextResponse.json({ message: 'User changed', success: true });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
