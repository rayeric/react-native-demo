import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { IconButton } from 'react-native-paper';

export default class ScanScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: '扫一扫',
		headerTransparent: true,
		headerTitleStyle: {
			color: '#fff',
			fontSize: appConstant.fontSize,
			flex: 1,
			textAlign: 'center',
		},
		headerLeft: <IconButton icon='arrow-left' color={'#fff'} size={appConstant.backSize}
								onPress={() => navigation.goBack()}/>,
		headerRight: <View/>,
		headerStyle: {
			elevation: 0,
			height: appConstant.headerHeight,
			paddingTop: appConstant.paddingTop,
		},
	});

	constructor(props) {
		super(props);
		this.state = {
			moveAnim: new Animated.Value(0),
		};
	}

	componentDidMount() {
		this.startAnimation();
	}

	startAnimation = () => {
		this.state.moveAnim.setValue(0);
		Animated.timing(
			this.state.moveAnim,
			{
				toValue: -200,
				duration: 1500,
				easing: Easing.linear,
			},
		).start(() => this.startAnimation());
	};
	//  识别二维码
	onBarCodeRead = (result) => {
		const { navigate } = this.props.navigation;
		const { data } = result;
		console.log(data);
		navigate('WebView', {
			url: data,
		});
	};

	componentWillUnmount(): void {
		StatusBar.setBarStyle('dark-content');
	}

	render() {
		StatusBar.setBarStyle('light-content');
		return (
			<View style={styles.container}>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.preview}
					type={RNCamera.Constants.Type.back}
					flashMode={RNCamera.Constants.FlashMode.on}
					onBarCodeRead={this.onBarCodeRead}
				>
					<View style={styles.rectangleContainer}>
						<View style={styles.rectangle}/>
						<Animated.View style={[
							styles.border,
							{ transform: [{ translateY: this.state.moveAnim }] }]}/>
						<Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
					</View>
				</RNCamera>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	rectangleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	rectangle: {
		height: 200,
		width: 200,
		borderWidth: 1,
		borderColor: '#0cbdff',
		backgroundColor: 'transparent',
	},
	rectangleText: {
		flex: 0,
		color: '#fff',
		marginTop: 10,
	},
	border: {
		flex: 0,
		width: 200,
		height: 2,
		backgroundColor: '#0cbdff',
	},
});
