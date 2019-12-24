import React, { Component } from 'react';
import {
	View,
	Text,
	SectionList,
	ScrollView,
	Dimensions,
	PanResponder,
	Animated,
	Easing,
	TouchableHighlight,
} from 'react-native';

export default class GroupListScreen extends Component {
	static navigationOptions = {
		title: '分组列表',
	};

	constructor(props) {
		super(props);
		this.state = {
			list: [
				{ title: 'A', data: ['A1', 'A2'] },
				{ title: 'B', data: ['B1', 'B2'] },
				{ title: 'C', data: ['C1', 'C2'] },
				{ title: 'D', data: ['D1', 'D2'] },
				{ title: 'E', data: ['E1', 'E2'] },
				{ title: 'F', data: ['F1', 'F2'] },
				{ title: 'G', data: ['G1', 'G2'] },
				{ title: 'H', data: ['H1', 'H2'] },
				{ title: 'J', data: ['J1', 'J2'] },
				{ title: 'K', data: ['K1', 'K2'] },
				{ title: 'L', data: ['L1', 'L2'] },
				{ title: 'M', data: ['M1', 'M2'] },
			],
			width: Dimensions.get('window').width,
			translateX: 0,
			right: -60,
		};
		this.animatedValue = new Animated.Value(0);
	}

	componentDidMount(): void {
		this.animate();
	}

	animate = () => {
		this.animatedValue.setValue(0);
		Animated.timing(this.animatedValue, {
			toValue: 1,
			duration: 1000,
			easing: Easing.linear,
		}).start();
	};

	_renderItem = ({ item, index, section }) => {
		return (
			<Animated.View key={index} style={{ position: 'relative' }}>
				<TouchableHighlight onPress={()=>console.log('1')} underlayColor={'#666'} onLongPress={() => console.log('onlongPress!')}>
					<View
						style={{
							backgroundColor: '#fff',
							borderBottomWidth: 1,
							borderColor: '#f9f9f9',
							width: this.state.width,
							height: 60,
							translateX: this.state.translateX,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text>{item}</Text>
					</View>
				</TouchableHighlight>
			</Animated.View>
		);
	};

	render() {
		return (
			<SectionList
				style={{ backgroundColor: '#f9f9f9' }}
				sections={this.state.list}
				renderItem={({ item, index, section }) => this._renderItem({ item, index, section })}
				keyExtractor={(item, index) => index + item}
				renderSectionHeader={({ section: { title } }) => (
					<Text style={{ fontWeight: 'bold', fontSize: 16, paddingLeft: 20 }}>{title}</Text>
				)}
			/>
		);
	}
}
