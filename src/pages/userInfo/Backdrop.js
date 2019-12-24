import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { Avatar, Button, IconButton, Colors } from 'react-native-paper';
import { BASE_URL } from '../../utils/request';

export default class Backdrop extends Component {
	render() {
		const { userInfo, showDrawer, cover } = this.props;
		return (
			<ImageBackground
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					paddingTop: 100,
					paddingBottom: 20,
					width: '100%',
				}}
				source={{ uri: cover.uri }}
			>
				<TouchableOpacity onPress={showDrawer} activeOpacity={.8}>
					<Avatar.Image source={{ uri: BASE_URL + userInfo.avatar }}/>
				</TouchableOpacity>
				<IconButton
					icon="camera"
					color={Colors.white}
					size={20}
					onPress={showDrawer}
				/>

				<Button mode="contained"
						style={{ borderRadius: 50, position: 'absolute', right: 5, bottom: 5 }}
						labelStyle={{ fontSize: 12 }}
						contentStyle={{ height: 25 }}
						onPress={() => this.props.navigation.navigate('Covers')}
						color='#fff'
				>更换封面</Button>
			</ImageBackground>
		);
	}
}
