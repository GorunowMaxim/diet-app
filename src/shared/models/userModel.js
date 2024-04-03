import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: [true, 'Please provide a username'],
		unique: true,
	},
	email: {
		type: String,
		required: [true, 'Please provide an email'],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password'],
	},
	extendData: {
		firstName: {
			type: String,
			default: '',
		},
		lastName: {
			type: String,
			default: '',
		},
		age: Number,
		dateOfBirth: {
			type: Date,
		},
		country: {
			type: String,
			default: '',
		},
		about: {
			type: String,
		},
	},
});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
