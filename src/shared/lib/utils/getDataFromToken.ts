import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const getDataFromToken = (req: NextRequest) => {
	try {
		const token = req.cookies.get('token')?.value || '';
		const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
		return decodedToken;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

export default getDataFromToken;
