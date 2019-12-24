import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

export default class ProductList extends Component {
	state = {
		list: [
			{ id: 11, title: '犯得上发生', describe: '', image: require('@/assets/images/timg.jpg') },
			{ id: 12, title: '犯得上发生', describe: '', image: require('@/assets/images/mian.jpg') },
			{ id: 13, title: '犯得上发生', describe: '', image: require('@/assets/images/dog.jpg') },
			{ id: 14, title: '犯得上发生', describe: '', image: require('@/assets/images/cats.jpg') },
			{ id: 15, title: '犯得上发生', describe: '', image: require('@/assets/images/mian.jpg') },
		],
		newData: {
			arrLeft: [],
			arrRight: [],
		},
	};

	changeData = (data) => {
		data.forEach((item, index) => {
			if (index % 2 === 0) {
				this.state.newData.arrLeft.push(item);
			} else {
				this.state.newData.arrRight.push(item);
			}
		});
	};

	_renderItem = (item, index) => {
		return (
			<TouchableOpacity
				style={styles.item} key={index} activeOpacity={.8}
				onPress={() => console.log('press')}
			>
				<View style={styles.itemImage}>
					<Image resizeMode='cover' source={item.image} style={{width: '100%'}}/>
				</View>
				<View style={styles.describe}>
					<Text>{item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	render() {
		this.changeData(this.state.list);
		return (
			<View style={styles.list}>
				<View style={[styles.column, { marginRight: 10 }]}>
					{
						this.state.newData.arrLeft.map((item, index) => this._renderItem(item, index))
					}
				</View>
				<View style={styles.column}>
					{
						this.state.newData.arrRight.map((item, index) => this._renderItem(item, index))
					}
				</View>
			</View>
		);
	}
}
const itemWidth = (Dimensions.get('window').width - 10) / 2;

const styles = StyleSheet.create({
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
	},
	column: {
		width: itemWidth,
	},
	item: {
		marginBottom: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
		borderRadius: 3,
		overflow: 'hidden',
	},
	itemImage: {
		width: itemWidth,
	},
	describe: {
		padding: 15,
	},
});
