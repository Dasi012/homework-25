import React, { useState } from 'react';
import { Header } from './../components/header/Header';
import { Basket } from './../components/basket/Basket';
import { useCallback } from 'react';
import { Outlet } from 'react-router-dom';

export const UserLayoult = () => {
	const [toggle, setToggle] = useState(false);

	const toggleHandler = useCallback(() => {
		setToggle((prev) => !prev);
	}, []);

	return (
		<>
			<Header toggleHandler={toggleHandler} />
			{toggle && <Basket toggleHandler={toggleHandler} toggle={toggle} />}

			<div>
				<Outlet />
			</div>
		</>
	);
};
