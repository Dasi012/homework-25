import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMealsRequest } from '../../Api/basketService';

export const getFoods = createAsyncThunk(
	'meals/getMeals',
	async (_, { rejectWithValue }) => {
		try {
			const {data} = await getMealsRequest('/foods');
			return data.data;
		} catch (error) {
			return rejectWithValue(
				error?.response?.message || `Something went wrong!`
			);
		}
	}
);
