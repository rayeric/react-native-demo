import { AppRegistry } from 'react-native';
import './src/utils/storage';
import './src/utils/constant';
import { name as appName } from './app.json';
import App from './src/App';
appConstant.setStatusBar();

AppRegistry.registerComponent(appName, () => App);
