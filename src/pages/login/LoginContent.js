import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import LoginInput from './LoginInput';
import ButtonGroup from './ButtonGroup';

class LoginContent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '15828931809',
			password: '123456pp',
		};
		this.animatedValue = new Animated.Value(0);
	}

	componentDidMount(): void {
		this.animate();
	}

	animate = () => {
		this.animatedValue.setValue(0);
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear,
		}).start();
	};

	_changeUserName = (v) => {
		console.log(v);
		this.setState({ username: v });
	};

	_changePassword = (v) => {
		console.log(v);
		this.setState({ password: v });
	};

	render() {
		const { username, password } = this.state;
		const movingMargin = this.animatedValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [100, 70, 40],
		});
		return (
			<Animated.View style={{ padding: 30, marginTop: movingMargin }}>
				<LoginInput
					value={username}
					changeValue={this._changeUserName}
					iconName={'account'}
					secureTextEntry={false}
					keyboardType='numeric'
					placeholder='username'
				/>
				<LoginInput
					value={password}
					changeValue={this._changePassword}
					iconName={'lock'}
					secureTextEntry={true}
					keyboardType='default'
					placeholder='password'
				/>
				<ButtonGroup data={this.state} {...this.props}/>
			</Animated.View>
		);
	}
}

export default LoginContent;
