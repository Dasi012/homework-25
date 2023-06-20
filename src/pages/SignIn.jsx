import { styled, Button, TextField, Box } from '@mui/material';

import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

import { singInRequest } from '../store/auth/authThunk';
import { snackBarAction } from '../store/snackBar';

const SignIn = () => {
	const [gmail, setGmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	console.log('gmail: ', gmail);
	console.log('password: ', password);

	const dispatch = useDispatch();

	const onchageEmailHandler = (e) => {
		setGmail(e.target.value);
	};

	const onchagePasswordHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		try {
			const data = {
				gmail,
				password,
			};

			dispatch(singInRequest(data))
				.unwrap('')
				.then(() => navigate('/'))
				.catch((err) => console.log(err));

			dispatch(snackBarAction.doSuccess('SuccessFully'));
		} catch (error) {
			dispatch(snackBarAction.doError('Something went wrong'));
		}
	};

	return (
		<>
			<FormStyled onSubmit={submitHandler}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
						alignItems: 'center',
					}}>
					<TextField
						id='outlined-basic'
						label='Gmail'
						variant='outlined'
						sx={{ width: '100%' }}
						value={gmail}
						onChange={onchageEmailHandler}
					/>
					<TextField
						id='filled-basic'
						label='Password'
						variant='outlined'
						sx={{ widht: '100%' }}
						value={password}
						onChange={onchagePasswordHandler}
					/>

					<Button variant='contained' sx={{ width: '100%' }} type='submit'>
						Sign up
					</Button>
					<div>
						Want to open a new account ?<Link to='/signup'>Sing up</Link>
					</div>
				</Box>
			</FormStyled>
		</>
	);
};

export default SignIn;

const FormStyled = styled('form')`
	margin: 0 auto;
	width: 500px;
	height: 420px;
	background-color: aliceblue;
	margin-top: 200px;
	padding: 30px;
	border-radius: 15px;
`;
