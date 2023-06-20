import { createAsyncThunk } from '@reduxjs/toolkit';

import { signIn, signUp } from '../../Api/authServis';
import { STORAGE_KEY } from '../../constants';

export const singUpRequest = createAsyncThunk(
	'auth/singUp',

	async (data, { rejecyWithValue }) => {
		try {
			const response = await signUp(data);

			localStorage.setItem(STORAGE_KEY.AUTH_KEY, JSON.stringify(response.data));

			return response.data;
		} catch (error) {
			return rejecyWithValue(error.message);
		}
	}
);

export const singInRequest = createAsyncThunk(
	'auth/singIn',
	async (payload, { rejecyWithValue }) => {
		try {
      console.log('data: ', payload);

			const response = await signIn(payload);

			localStorage.setItem(STORAGE_KEY.AUTH_KEY, JSON.stringify(response.data));

			return response.data;
		} catch (error) {
			return rejecyWithValue(error.message);
		}
	}
);

// export const logout = () => {
// 	return localStorage.clear();
// };
