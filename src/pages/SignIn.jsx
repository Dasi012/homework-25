import { styled, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { singInRequest } from '../store/auth/authThunk';

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

		const data = {
			email: gmail,
			password,
		};

		dispatch(singInRequest(data))
			.unwrap('')
			.then(() => navigate('/'))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<FormStyled onSubmit={submitHandler}>
				<div
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
						alignItems: 'center',
					}}>
					<TextField
						label='Email'
						variant='outlined'
						sx={{ width: '100%' }}
						value={gmail}
						onChange={onchageEmailHandler}
					/>
					<TextField
						label='Password'
						variant='filled'
						sx={{ widht: '100%' }}
						value={password}
						onChange={onchagePasswordHandler}
					/>
					<Button variant='contained' sx={{ width: '100%' }} type='submit'>
						Sign up
					</Button>
				</div>
				<Link to='/signup'>Create an account?</Link>
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
