import React, { Component } from 'react';
import { View, Switch } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { List } from 'react-native-paper';
import store from '../../store';
import { setToken } from '../../store/actions/actions';

const resetAction = StackActions.reset({
	index: 0,
	actions: [
		NavigationActions.navigate({ routeName: 'Login' }),
	],
});

export default class SettingScreen extends Component {
	static navigationOptions = {
		title: '设置',
	};

	state = {
		visible: false,
		open: false,
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<List.Item
					title='退出登录'
					// left={props => <List.Icon {...props} icon="exit-to-app"/>}
					onPress={() => {
						store.dispatch(setToken(''));
						storage.remove({ key: 'token' }).then(() => this.props.navigation.dispatch(resetAction));
					}}
				/>
				<List.Item
					title='开/关'
					onPress={() => this.setState({ open: !this.state.open })}
					right={
						() => <Switch
							value={this.state.open}
							onValueChange={() => this.setState({ open: !this.state.open })}
						/>
					}
				/>
			</View>
		);
	}
}
