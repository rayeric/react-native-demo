import React from 'react';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import store from '../../store';
import { setToken } from '../../store/actions/actions';
import { login, register } from '../../apis/user';
import { verifyPass, verifyPhone } from '../../utils';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

const resetAction = StackActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({ routeName: 'TabBar' }),
	],
});

export default class ButtonGroup extends React.Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
	};

	_verify = () => {
		const { username, password } = this.props.data;
		if (!verifyPhone.test(username)) {
			Alert.alert('提示', '手机号码不合法！', [{ text: '确定' }]);
			return false;
		} else if (!verifyPass.test(password)) {
			Alert.alert('提示', '密码有效值为6-20位数组、字母和符号组合！', [{ text: '确定' }]);
			return false;
		} else {
			return true;
		}
	};

	toLogin = () => {
		if (this._verify()) {
			login(this.props.data).then(res => {
				console.log(res);
				if (res.state === 1) {
					store.dispatch(setToken(res.token));
					storage.save({ key: 'token', data: res.token }).then(r => r);
					this.props.navigation.dispatch(resetAction);
				} else {
					Alert.alert('提示', res.msg, [{ text: '确定' }]);
				}
			}).catch(err => {
				console.log(err);
			});
		}
	};

	toRegister = () => {
		if (this._verify()) {
			register(this.props.data).then(res => {
				console.log(res);
				Alert.alert('提示', res.msg, [{ text: '确定' }]);
			}).catch(err => {
				console.log(err);
			});
		}
	};

	render() {
		return (
			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
				<Button icon="login" mode="contained"
						onPress={this.toLogin} style={{ flex: .45 }}>
					sign in
				</Button>
				<Button icon="registered-trademark" mode="contained"
						onPress={this.toRegister} color={'#3f51b5'} style={{ flex: .45 }}>
					sign up
				</Button>
			</View>
		);
	}
}
