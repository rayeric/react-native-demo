import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TextInput,
	ScrollView,
	TouchableOpacity,
	Animated,
	Easing,
	Alert,
} from 'react-native';
import { Text, Button, Avatar } from 'react-native-paper';
import { connect } from 'react-redux';
import { setToken } from '../../store/actions/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { login, register } from '../../apis/user';
import { verifyPass, verifyPhone } from '../../utils';

function mapStateToProps(state) {
	return {
		token: state.token,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setToken: (data) => dispatch(setToken(data)),
	};
}

class Login extends Component {
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

	_verify = () => {
		const { username, password } = this.state;
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
		const { setToken } = this.props;
		if (this._verify()) {
			login(this.state).then(res => {
				console.log(res);
				if (res.state === 1) {
					setToken(res.token);
					storage.save({ key: 'token', data: res.token }).then(r => r);
					this.props.navigation.navigate('TabBar');
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
			register(this.state).then(res => {
				console.log(res);
				Alert.alert('提示', res.msg, [{ text: '确定' }]);
			}).catch(err => {
				console.log(err);
			});
		}
	};

	render() {
		const { username, password } = this.state;
		const movingMargin = this.animatedValue.interpolate({
			inputRange: [0, 0.5, 1],
			outputRange: [100, 70, 40],
		});
		return (
			<ScrollView
				style={styles.container}
				keyboardShouldPersistTaps="never"
				keyboardDismissMode="on-drag"
			>
				<View style={styles.header}>
					<View style={{ flex: .2 }}/>
					<Text style={styles.title}>SIGN IN</Text>
					<TouchableOpacity
						activeOpacity={0.5}
						style={{ flex: .2 }}
						onPress={() => this.props.navigation.navigate('Home')}
					>
						<Text style={styles.jumped}>跳过</Text>
					</TouchableOpacity>
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
					<Avatar.Image style={{ backgroundColor: 'transparent' }}
								  source={require('@/assets/images/cats.jpg')}/>
				</View>
				<Animated.View style={{ padding: 30, marginTop: movingMargin }}>
					<View style={styles.inputBox}>
						<Icon name="account" size={18} color="#ccc" style={styles.inputIcon}/>
						<TextInput
							value={username}
							autoFocus={false}
							placeholder="username"
							style={styles.textInput}
							onChangeText={(v) => this.setState({ username: v })}
						/>
					</View>
					<View style={styles.inputBox}>
						<Icon name="lock" size={18} color="#ccc" style={styles.inputIcon}/>
						<TextInput
							value={password}
							style={styles.textInput}
							placeholder="password"
							secureTextEntry={true}
							onChangeText={(v) => this.setState({ password: v })}
						/>
					</View>
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
				</Animated.View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
	},
	inputBox: {
		marginBottom: 15,
		flexDirection: 'row',
		backgroundColor: '#f1f1f1',
		alignItems: 'center',
		borderRadius: 4,
		paddingLeft: 10,
		paddingRight: 10,
	},
	textInput: {
		height: 40,
		paddingTop: 0,
		paddingBottom: 0,
		flex: .9,
	},
	inputIcon: {
		flex: .1,
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		flexDirection: 'row',
		height: 45,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
	},
	title: {
		fontSize: 18,
		flex: .6,
		textAlign: 'center',
		color: '#000',
	},
	jumped: {
		fontSize: 16,
		textAlign: 'right',
		color: '#000',
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
