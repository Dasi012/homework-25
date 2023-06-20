import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Box, Button, TextField } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import { singUpRequest } from '../store/auth/authThunk';

import { USERS_ROLE } from '../constants';
import { snackBarAction } from '../store/snackBar';
// import SignIn from './SignIn';

export const SignUp = () => {
	const [name, setName] = useState('');

	const [gmail, setGmail] = useState('');

	const [password, setPassword] = useState('');

	const [confirm, setConfirm] = useState('');

	const dispatch = useDispatch();

	const navigate = useNavigate();

	function onchageNameHandler(e) {
		setName(e.target.value);
	}

	function onchageEmailHandler(e) {
		setGmail(e.target.value);
	}

	function onchagePasswordHandler(e) {
		setPassword(e.target.value);
	}

	function onchageConfirmHandler(e) {
		setConfirm(e.target.value);
	}

	function submitHandler(e) {
		e.preventDefault();

		const data = {
			name,
			gmail,
			password,
			role: USERS_ROLE.USER,
		};

		// 	dispatch(singUpRequest(data).unwrap().then(navigate('/signin')));
		// }

		if (password !== confirm) {
			alert("Passwords don't match");
			return;
		}

		dispatch(singUpRequest(data))
			.unwrap()
			.then(() => navigate('/signin'))
			.catch((error) => console.log(error));
		dispatch(snackBarAction.doSuccess('Successfully'));
	}

	return (
		<>
			<FormStyled onSubmit={submitHandler}>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<TextField
						label='Name'
						sx={{ width: '100%' }}
						id='filled-basic'
						variant='outlined'
						placeholder='name'
						type='text'
						value={name}
						onChange={onchageNameHandler}
					/>

					<TextField
						sx={{ width: '100%' }}
						id='filled-basic'
						label='Gmail'
						variant='outlined'
						placeholder='gmail'
						value={gmail}
						type='email'
						onChange={onchageEmailHandler}
					/>

					<TextField
						type='password'
						sx={{ width: '100%' }}
						placeholder='password'
						id='filled-basic'
						label='Password'
						variant='outlined'
						value={password}
						onChange={onchagePasswordHandler}
					/>

					<TextField
						sx={{ width: '100%' }}
						id='filled-basic'
						label='Confirm password'
						placeholder='password'
						type='password'
						variant='outlined'
						value={confirm}
						onChange={onchageConfirmHandler}
					/>

					<Button type='submit' variant='contained'>
						Sign up
					</Button>
					<Link to='/signin'>Sign in with current account ?</Link>
				</Box>
			</FormStyled>
		</>
	);
};

const FormStyled = styled('form')`
	margin: 0 auto;
	width: 500px;
	height: 420px;
	background-color: aliceblue;
	margin-top: 200px;
	padding: 30px;
	border-radius: 15px;
`;
