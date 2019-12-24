import React from 'react';
// import { View, StyleSheet, TextInput, Text } from 'react-native';
// import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//pages
import HomeScreen from '../pages/home';
import MineScreen from '../pages/mine';

//构建TabBar
export default createMaterialBottomTabNavigator(
	{
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarLabel: '首页',
				tabBarColor: '#694fad',
			},
		},
		Mine: {
			screen: MineScreen,
			navigationOptions: {
				tabBarLabel: '我的',
				tabBarColor: '#795548',
			},
		},
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let IconComponent = Icon;
				let iconName;
				if (routeName === 'Home') {
					iconName = 'home';
				} else if (routeName === 'Movie') {
					iconName = 'video';
				} else if (routeName === 'Mine') {
					iconName = 'account-box';
				}

				return <IconComponent name={iconName} size={22} color={tintColor}/>;
			},
		}),
		initialRouteName: 'Home',
		activeColor: '#f0edf6',
		inactiveColor: '#c6cbd1',
		barStyle: { backgroundColor: '#694fad' },
		shifting: true,
	},
);
