import { Provider } from 'react-redux';
import { store } from './store';
import { MainRouter } from './routes/MainRouter';

const App = () => {
	return (
		<Provider store={store}>
			<MainRouter />
		</Provider>
	);
};

export default App;
