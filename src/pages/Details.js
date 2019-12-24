import React, { Component } from 'react';
import { View, Alert, Button, ActivityIndicator, Picker, ProgressBarAndroid } from 'react-native';
import { Text } from 'react-native-paper';

export default class DetailsScreen extends Component {
	static navigationOptions = {
		title: '详情页',
	};

	state = {
		isLoading: false,
		language: '',
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text>Loading</Text>
				<ActivityIndicator size="large" animating={this.state.isLoading}/>
				<Button title="toggleLoading" onPress={() => this.setState({ isLoading: !this.state.isLoading })}/>
				<Text>Alert</Text>
				<Button title="open alert" onPress={() => {
					Alert.alert('提示', '这是一个弹框', [{
							text: '确认', onPress: () => {},
						}, {
							text: '取消',
							style: 'cancel',
						}],
						{ cancelable: false });
				}}/>

				<Text>Picker</Text>
				<Picker
					selectedValue={this.state.language}
					style={{ height: 50, width: 200 }}
					mode="dialog"
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ language: itemValue })
					}>
					<Picker.Item label="Java" value="java"/>
					<Picker.Item label="JavaScript" value="js"/>
				</Picker>
				<Text>ProgressBarAndroid</Text>
				<ProgressBarAndroid/>
				<ProgressBarAndroid styleAttr="Horizontal"/>
				<ProgressBarAndroid styleAttr="Horizontal" color="#2196F3"/>
				<ProgressBarAndroid
					styleAttr="SmallInverse"//enum('Horizontal', 'Normal', 'Small', 'Large', 'Inverse', 'SmallInverse', 'LargeInverse')
					indeterminate={true}
					progress={0.5}
				/>
			</View>
		);
	}
}
