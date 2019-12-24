import React, { Component } from 'react';
import store from '../store';
import { setToken } from '../store/actions/actions';

export default class Auth extends Component {
	_bootstrapAsync = () => {
		storage.load({ key: 'token' })
			.then((res) => {
				store.dispatch(setToken(res));
				this.props.navigation.navigate('StackSwitch');
			})
			.catch(() => this.props.navigation.navigate('LoginSwitch'));
	};

	render() {
		this._bootstrapAsync();
		return <></>;
	}
}
