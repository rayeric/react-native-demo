import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-paper';

export default class HomeHeader extends Component {
	render() {
		return (
			<View style={styles.header}>
				<TouchableOpacity style={styles.headerLeft} activeOpacity={0.5}
								  onPress={() => this.props.navigation.navigate('Scan')}
				>
					<AntDesign name="scan1" size={20} color={HEADER_ICON_COLOR}/>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.headerCenter}
					activeOpacity={1}
					onPress={() => {
						this.props.setModalVisible(true);
					}}
				>
					<View style={styles.textInput}>
						<AntDesign name="search1" size={SEARCH_SIZE} color={SEARCH_COLOR}/>
						<Text style={styles.text}>搜索</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.headerRight} activeOpacity={0.5}>
					<Ionic name="ios-add-circle-outline" size={20} color={HEADER_ICON_COLOR}/>
				</TouchableOpacity>
			</View>
		);
	}
}

const HEADER_ICON_COLOR = '#222';
const SEARCH_COLOR = '#ccc';
const SEARCH_SIZE = 14;
const styles = StyleSheet.create({
	header: {
		height: appConstant.headerHeight,
		paddingTop: appConstant.paddingTop,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerLeft: {
		flex: 1,
		alignItems: 'center',
	},
	headerCenter: {
		flex: 5,
	},
	headerRight: {
		flex: 1,
		alignItems: 'center',
	},
	textInput: {
		height: 28,
		backgroundColor: '#F5F5FC',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		color: SEARCH_COLOR,
		fontSize: SEARCH_SIZE,
		marginLeft: 3,
	},
});

