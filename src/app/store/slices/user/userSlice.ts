import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
	try {
		const response = await axios.get('/api/user');
		return response.data;
	} catch (error: any) {
		throw new Error(error);
	}
});

const initialState: any = {}

export const userSlice = createSlice({
	name: 'user',
    initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUserData.fulfilled, (state, action) => {
			state.userData = action.payload;
		});
	},
});

export default userSlice.reducer