import { Provider } from 'react-redux';
import { store } from './store';
import { MainRouter } from './routes/MainRouter';
// import { useEffect } from 'react';
// import { getBasket } from './store/basket/basketThunk';

const App = () => {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getBasket());
	// }, [dispatch]);

	return (
		<Provider store={store}>
			<MainRouter />
		</Provider>
	);
};

export default App;
