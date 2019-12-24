import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class CateList extends Component {
	state = {
		list: [
			{ id: 1, name: 'apple', icon: 'apple', color: '#000' },
			{ id: 2, name: 'archive', icon: 'archive', color: '#000' },
			{ id: 3, name: 'apps-box', icon: 'apps-box', color: '#000' },
			{ id: 4, name: 'alarm', icon: 'alarm-snooze', color: '#000' },
			{ id: 5, name: 'alpha', icon: 'alpha-k-circle', color: '#000' },
			{ id: 6, name: 'amplifier', icon: 'amplifier', color: '#000' },
			{ id: 7, name: 'basket', icon: 'basket', color: '#000' },
			{ id: 8, name: 'battery', icon: 'battery', color: '#000' }
		],
	};

	_renderItem = (item) => {
		return (
			<TouchableOpacity style={styles.itemContainer} key={item.id} onPress={() => console.log('press')}>
				<Icon name={item.icon} size={25} color={'#444'}/>
				<Text style={styles.itemName}>{item.name}</Text>
			</TouchableOpacity>
		);
	};

	render() {
		return (
			<View style={styles.list}>
				{
					this.state.list.map((item) => this._renderItem(item))
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	list: {
		borderTopWidth: 1,
		borderColor: '#f5f5fc',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	itemContainer: {
		backgroundColor: '#fff',
		justifyContent:'center',
		alignItems: 'center',
		width: Dimensions.get('window').width/4,
		height: Dimensions.get('window').width/4,
		// borderBottomWidth: 1,
		// borderRightWidth: 1,
		// borderColor: '#f5f5fc'
	},
	itemName: {
		fontSize: 14,
		marginTop: 5,
		color: '#444'
	},
});

