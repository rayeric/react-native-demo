import React from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { createStackNavigator, StackViewStyleInterpolator } from 'react-navigation-stack';
import TabNavigator from './TabNavigator';
import ScanScreen from '../pages/Scan';
import DetailsScreen from '../pages/Details';
import LoginScreen from '../pages/login';
import WebViewScreen from '../pages/WebView';
import SettingScreen from '../pages/setting';
import UserInfoScreen from '../pages/userInfo';
import GroupListScreen from '../pages/GroupList';
import FloatBar from '../pages/FloatBar';
import TableScreen from '../pages/TableScreen';
import CardScreen from '../pages/Cards';
import OtherScreen from '../pages/Others';
import CoverScreen from '../pages/Covers';

export default createStackNavigator(
	{
		TabBar: {
			screen: TabNavigator,
			navigationOptions: {
				header: null,
			},
		},
		Details: { screen: DetailsScreen },
		Scan: { screen: ScanScreen },
		Login: {
			screen: LoginScreen,
			navigationOptions: {
				headerTransparent: true,
				headerStyle: {
					elevation: 0,
					height: appConstant.headerHeight,
					paddingTop: appConstant.paddingTop,
				},
				headerTitleStyle: {
					textAlign: 'center',
					flex: 1,
				},
				headerLeft: <View/>,
				headerRight: <View/>,
			},
		},
		WebView: { screen: WebViewScreen },
		Setting: { screen: SettingScreen },
		UserInfo: {
			screen: UserInfoScreen,
			navigationOptions: {
				headerTransparent: true,
				headerStyle: {
					elevation: 0,
					height: appConstant.headerHeight,
					paddingTop: appConstant.paddingTop,
				},
			},
		},
		GroupList: { screen: GroupListScreen },
		FloatBar: { screen: FloatBar },
		DataTable: { screen: TableScreen },
		Cards: { screen: CardScreen },
		Others: { screen: OtherScreen },
		Covers: { screen: CoverScreen },
	},
	{
		initialRouteName: 'TabBar',
		// 二级页面隐藏TabBar
		navigationOptions: ({ navigation }) => ({
			tabBarVisible: navigation.state.index > 0 ? false : true,
		}),
		transitionConfig: () => ({ // 页面跳转动画，自右向左打开
			screenInterpolator: (sceneProps) => {
				return StackViewStyleInterpolator.forHorizontal(sceneProps);
			},
		}),
		defaultNavigationOptions: ({ navigation }) => ({
			gestureDirection: 'inverted',
			gesturesEnabled: true,
			headerStyle: {
				elevation: appConstant.elevation,
				height: appConstant.headerHeight,
				paddingTop: appConstant.paddingTop,
			},
			headerTitleStyle: {
				fontSize: appConstant.fontSize,
				flex: 1,
				textAlign: 'center',
			},
			headerLeft: <IconButton icon='arrow-left' size={appConstant.backSize} onPress={() => navigation.goBack()}/>,
			headerRight: <View/>,
		}),
	},
);
