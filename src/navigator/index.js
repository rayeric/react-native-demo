import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import StackNavigator from './StackNavigator';
import Login from '../pages/login';
import Auth from './Auth';

const SwitchNavigator = createSwitchNavigator(
	{
		Auth: Auth,
		LoginSwitch: Login,
		StackSwitch: StackNavigator,
	},
	{
		initialRouteName: 'Auth',
	},
);
export default createAppContainer(SwitchNavigator);
