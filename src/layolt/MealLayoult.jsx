import React from 'react';
import { MealSummary } from './../components/meal-summary/MealSummary';
import { Meals } from './../components/meals/Meals';

export const MealLayoult = () => {
	return (
		<>
			<MealSummary />
			<Meals />
		</>
	);
};
