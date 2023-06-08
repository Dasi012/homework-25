import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../UI/card/Card';
import { MealItem } from './MealItem';
import { useDispatch, useSelector } from 'react-redux';
import { getFoods } from '../../store/meals/mealsThunk';
import { SnackBar } from '../UI/SnackBar';
import { snackBarAction } from '../../store/snackBar';

export const Meals = () => {
	const dispatch = useDispatch();
	const { meals } = useSelector((state) => state.meals);
	const { open } = useSelector((state) => state.snackbar);
  console.log('meals: ', meals);
	console.log('open: ', open);
	console.log('Hello');

	useEffect(() => {
		dispatch(getFoods());
	}, [dispatch]);

	function onCloseHandler() {
		dispatch(snackBarAction.closeSnackBar());
	}

	return (
		<>
			{open && <SnackBar handleClose={onCloseHandler} />}
			<Container>
				<SnackBar />
				<Card>
					{meals?.map((meal) => (
						<MealItem key={meal._id} meal={meal} />
					))}
				</Card>
			</Container>
		</>
	);
};

const Container = styled.div`
	margin-top: 135px;
	margin-bottom: 100px;
`;
