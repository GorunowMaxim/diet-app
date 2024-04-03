import { ProfileUserDataProps } from '@/shared/types/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
	try {
		const response = await axios.get('/api/user');
		return response.data.data;
	} catch (error: any) {
		throw new Error(error);
	}
});

interface InitialState {
	userData: ProfileUserDataProps | null;
}

const initialState: InitialState = {
	userData: null,
};

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

export default userSlice.reducer;
