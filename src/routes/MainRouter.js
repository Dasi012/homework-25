import { Routes, Route } from 'react-router-dom';
import { MealLayoult } from './../layolt/MealLayoult';
import { UserLayoult } from './../layolt/UserLayoult';
import { SignUp } from '../pages/SignUp';
import SignIn from '../pages/SignIn';
// import SignIn from '../pages/Signin';

export const MainRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<UserLayoult />}>
					<Route index element={<MealLayoult />} />
					<Route path='signin' element={<SignIn />} />
					<Route path='signup' element={<SignUp />} />
				</Route>
			</Routes>
		</>
	);
};
