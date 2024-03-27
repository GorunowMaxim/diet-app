import mongoose from 'mongoose';

export async function connectDB() {
	try {
		mongoose.connect(process.env.NEXT_PUBLIC_DB_URL!);
		const connection = mongoose.connection;

		connection.on('connected', () => {
			console.log('success');
		});

		connection.on('error', (err) => {
			console.log('error', err);
			process.exit();
		});
	} catch (e) {
		console.log('something went wrong', e);
	}
}

connectDB();
