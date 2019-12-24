import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './navigator/index';
import store from './store/index';
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		);
	}
}

export default App;
