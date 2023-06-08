import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp } from '../../Api/authServis';
import { STORAGE_KEY } from '../../constants';

export const singUpRequest = createAsyncThunk(
	'auth/singUp',
	async (data, { rejecyWithValue }) => {
		try {
			const response = await signUp(data);
			localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(response.data));

			return response.data;
		} catch (error) {
			return rejecyWithValue(error);
		}
	}
);

export const singInRequest = createAsyncThunk(
	'auth/singIn',
	async (data, { rejecyWithValue }) => {
		try {
			console.log('data: ', data);
			const response = await signIn(data);
			localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(response.data));

			return response.data;
		} catch (error) {
			return rejecyWithValue(error);
		}
	}
);

// export const logout = () => {
// 	return localStorage.clear();
// };
