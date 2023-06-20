import { createSlice } from '@reduxjs/toolkit';
import { singInRequest, singUpRequest } from './authThunk';
import { STORAGE_KEY } from '../../constants';

export const getInitialState = () => {
	const json = localStorage.getItem(STORAGE_KEY.AUTH_KEY);

	if (json) {
		const userData = JSON.parse(json);
		return {
			isAuthorization: true,
			token: userData.data.token,
			user: {
				name: userData.data.user.name,
				gmail: userData.data.user.email,
				role: userData.data.user.role,
			},
		};
	}

	return {
		isAuthorization: false,
		token: '',
		user: {
			gmail: '',
			name: '',
			role: '',
		},
	};
};

const initialState = getInitialState();

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
			console.log(action);

			state.isAuthorization = true;
			state.token = action.token;
			state.user = {
				name: action.payload.name,
				gmail: action.payload.gmail,
				role: action.payload.role,
			};
		});

		builder.addCase(singInRequest.fulfilled, (state, action) => {
			state.isAuthorization = true;
			state.token = action.payload;
			state.user = {
				name: action.payload.name,
				gmail: action.payload.gmail,
				role: action.payload.role,
			};
		});

		builder.addCase(singInRequest.pending, (state) => {
			state.isAuthorization = false;
		});
	},
});

export const authActions = authSlice.actions;
