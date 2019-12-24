import { StatusBar } from 'react-native';

const appConstant = {
	headerHeight: 45 + StatusBar.currentHeight,
	elevation: 0.5,
	paddingTop: StatusBar.currentHeight,
	fontSize: 16,
	setStatusBar: () => {
		StatusBar.setTranslucent(true);
		StatusBar.setBarStyle('dark-content');
		StatusBar.setBackgroundColor('transparent');
	},
	backSize: 20
};

global.appConstant = appConstant;
