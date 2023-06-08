import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { singUpRequest } from '../store/auth/authThunk';
import { USERS_ROLE } from '../constants';

export const SignUp = () => {
	const [name, setName] = useState('');
	const [gmail, setGmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');

	const dispatch = useDispatch();

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
			email: gmail,
			password,
			role: USERS_ROLE.USER,
		};
		dispatch(singUpRequest(data));
	}

	return (
		<>
			<FormStyled onSubmit={submitHandler}>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<TextField
						label='Name'
						variant='outlined'
						value={name}
						onChange={onchageNameHandler}
					/>
					<TextField
						label='Gmail'
						variant='outlined'
						value={gmail}
						onChange={onchageEmailHandler}
					/>
					<TextField
						label='Password'
						variant='outlined'
						value={password}
						onChange={onchagePasswordHandler}
					/>
					<TextField
						label='Confirm password'
						variant='outlined'
						value={confirm}
						onChange={onchageConfirmHandler}
					/>
					<Button type='submit' variant='contained'>
						Sign up
					</Button>
				</Box>
				<Link to='/signin'>Sign in with current account</Link>
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
