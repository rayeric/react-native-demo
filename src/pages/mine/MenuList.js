/**
 * 构造 Menu List
 * */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MenuList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ id: 1, title: '卡片', icon: 'card-bulleted-outline', path: 'Cards' },
				{ id: 2, title: '分组列表', icon: 'format-list-numbered-rtl', path: 'GroupList' },
				{ id: 3, title: '浮动按钮', icon: 'page-layout-sidebar-right', path: 'FloatBar' },
				{ id: 4, title: '数据表格', icon: 'table', path: 'DataTable' },
				{ id: 5, title: '其他组件', icon: 'plus', path: 'Others' },
				{ id: 6, title: '设置', icon: 'settings', path: 'Setting' },
			],
		};
	}

	render() {
		return (
			<View style={styles.list}>
				{
					this.state.data.map(item => {
						return this._renderItem({ item });
					})
				}
				{/*<FlatList*/}
				{/*	data={this.state.data}*/}
				{/*	style={styles.list}*/}
				{/*	renderItem={this._renderItem}*/}
				{/*	keyExtractor={item => item.id.toString()}*/}
				{/*	ItemSeparatorComponent={() => {*/}
				{/*		return (*/}
				{/*			<View style={styles.separator}/>*/}
				{/*		);*/}
				{/*	}}*/}
				{/*/>*/}
			</View>
		);
	}

	_renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				activeOpacity={0.5}
				style={styles.itemContainer}
				onPress={() => this.props.navigation.navigate(item.path)}
				key={item.id}
			>
				<Icon name={item.icon} size={18} style={styles.icon} color="#999"/>
				<Text style={styles.itemTitle}>{item.title}</Text>
				<Text style={styles.arrow}/>
			</TouchableOpacity>
		);
	};
}

const styles = StyleSheet.create({
	list: {
		paddingTop: 15,
		backgroundColor: '#F5F5FC',
	},
	itemContainer: {
		backgroundColor: '#fff',
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		position: 'relative',
	},
	itemTitle: {
		fontSize: 14,
	},
	separator: {
		height: 0,
		backgroundColor: '#f1f1f1',
	},
	icon: {
		marginRight: 10,
	},
	arrow: {
		width: 8,
		height: 8,
		borderTopWidth: 1,
		borderRightWidth: 1,
		borderColor: '#ccc',
		transform: [{ rotate: '45deg' }],
		position: 'absolute',
		top: 20,
		right: 15,
	},
});
