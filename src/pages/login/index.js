import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Avatar } from 'react-native-paper';
import LoginContent from './LoginContent';

class Login extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		title: 'SIGN IN/UP',
	};

	render() {
		return (
			<ScrollView
				style={styles.container}
				keyboardShouldPersistTaps="never"
				keyboardDismissMode="on-drag"
			>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
					<Avatar.Image
						style={{ backgroundColor: 'transparent' }}
						source={require('@/assets/images/cats.jpg')}
					/>
				</View>
				<LoginContent {...this.props}/>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
		paddingTop: appConstant.paddingTop,
	},
});

export default Login;
