import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OrderBasket } from './OrderBasket';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// import { logout } from './../../store/auth/authThunk';
import { authActions } from '../../store/auth/authSlice';

export const Header = ({ toggleHandler }) => {
	const [animationClass, setAnimationClass] = useState('');
	const { items } = useSelector((state) => state.basket);
	const { isAuthorization } = useSelector((state) => state.auth);

	const navigate = useNavigate();

	const plusAnimation = () => {
		setAnimationClass('bump');

		const animationTimePlus = setTimeout(() => {
			setAnimationClass('');
		}, 300);

		return () => {
			clearTimeout(animationTimePlus);
		};
	};

	useEffect(() => {
		plusAnimation();
	}, [items]);

	const navigataToSgnIn = () => {
		navigate('signin');
	};

	const dispatch = useDispatch();

	const logoutHandler = () => {
		return dispatch(authActions.logout());
	};

	return (
		<HeaderStyle>
			<Container>
				<MealsText>React Meals</MealsText>
				<OrderBasket className={animationClass} toggleHandler={toggleHandler}>
					Your Cart
				</OrderBasket>
				{isAuthorization ? (
					<StyledButton variant='contained' onClick={logoutHandler}>
						logout
					</StyledButton>
				) : (
					<Button variant='contained' onClick={navigataToSgnIn}>
						log in
					</Button>
				)}
			</Container>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.header`
	position: fixed;
	width: 100%;
	height: 101px;
	background-color: #8a2b06;
	padding: 22px 120px;
	color: #ffffff;
	top: 0;
	z-index: 998;

	.bump {
		animation: bump 300ms ease-out;
	}

	@keyframes bump {
		0% {
			transform: scale(1);
		}
		10% {
			transform: scale(0.9);
		}
		30% {
			transform: scale(1.1);
		}
		50% {
			transform: scale(1.15);
		}
		100% {
			transform: scale(1);
		}
	}
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const MealsText = styled.p`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 600;
	font-size: 38px;
	line-height: 57px;
	color: #ffffff;
`;

const StyledButton = styled(Button)`
	background-color: #5a1f08;
	&:hover {
		background-color: #bc5932;
	}
`;