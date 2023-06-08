import { createSlice } from '@reduxjs/toolkit';
import { singInRequest, singUpRequest } from './authThunk';
import { STORAGE_KEY } from '../../constants';

export const getInitialState = () => {
	const json = localStorage.getItem(STORAGE_KEY.AUTH);

	if (json) {
		const userData = JSON.parse(json);
		return {
			isAuthorization: true,
			token: userData.data.token,
			user: {
				name: userData.data.name,
				email: userData.data.email,
				role: userData.data.role,
			},
		};
	}
	return {
		isAuthorization: false,
		token: '',
		user: {
			email: '',
			name: '',
			role: '',
		},
	};
};

const initialState = {
	isAuthorization: false,
	token: '',
	user: {
		name: '',
		gmail: '',
		password: '',
		id: '',
	},
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducer: {
		logout: (state) => {
			state.isAuthorization = false;
			state.token = '';
			state.user = {
				name: '',
				gmail: '',
				password: '',
				id: '',
			};
			return localStorage.clear();
		},
	},
	extraReducers: (builder) => {
		builder.addCase(singUpRequest.fulfilled, (state, action) => {
			state.isAuthorization = true;
			state.token = action.payload;
		});
		// builder.addCase(singUpRequest.pending, (state) => {});
		// builder.addCase(singUpRequest.rejected, (state, action) => {});
		builder.addCase(singInRequest.fulfilled, (state, action) => {
			state.isAuthorization = true;
			state.token = action.token;
		});
		builder.addCase(singInRequest.pending, (state) => {
			state.isAuthorization = false;
		});
	},
});

export const authActions = authSlice.actions;
