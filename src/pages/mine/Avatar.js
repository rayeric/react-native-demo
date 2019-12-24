/**
 * Image组件使用
 * `<Image source={require('./img/icon.jpg')}/>`
 * `<Image source={{uri: 'http://..................*.jpg'}}/>`
 * */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { BASE_URL } from '../../utils/request';

export default class Header extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity
					style={styles.container}
					activeOpacity={1}
					onPress={() => this.props.navigation.navigate('UserInfo')}
				>
					<View>
						<Avatar.Image
							style={styles.image}
							source={{ uri: BASE_URL + this.props.userInfo.avatar }}
						/>
					</View>
					<View>
						<Text style={styles.name}>{this.props.userInfo.nick_name}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 30,
		backgroundColor: '#fff',
		paddingTop: appConstant.paddingTop + 30
	},
	image: {
		backgroundColor: 'transparent'
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 15,
	},
});
