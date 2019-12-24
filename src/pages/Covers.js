import React, { Component } from 'react';
import { StatusBar, StyleSheet, FlatList } from 'react-native';
import { Button, Card } from 'react-native-paper';
import store from '../store';
import { setCover } from '../store/actions/actions';

export default class CoverScreen extends Component {
	static navigationOptions = {
		title: '封面设置',
	};

	state = {
		covers: [
			{ id: 1, uri: 'https://picsum.photos/700', path: '@/assets/covers/199.jpg' },
			{ id: 2, uri: 'https://picsum.photos/1017', path: '@/assets/covers/866.jpg' },
			{ id: 3, uri: 'https://picsum.photos/1041', path: '@/assets/covers/870.jpg' },
			{ id: 4, uri: 'https://picsum.photos/666', path: '@/assets/covers/1041.jpg' },
			{ id: 5, uri: 'https://picsum.photos/600', path: '@/assets/covers/1055.jpg' },
		],
	};

	_chooseCover = (id) => {
		const cover = this.state.covers.find(item => item.id === id);
		store.dispatch(setCover(cover));
	};

	_renderItem = ({ item }) => {
		return (
			<Card style={styles.card}>
				<Card.Cover source={{ uri: item.uri }} style={styles.cover}/>
				<Card.Actions style={styles.action}>
					<Button
						mode='contained'
						labelStyle={styles.buttonText}
						contentStyle={styles.buttonContent}
						color='#fff'
						style={styles.button}
						onPress={() => this._chooseCover(item.id)}
					>设为封面</Button>
				</Card.Actions>
			</Card>
		);
	};

	componentDidMount(): void {
		StatusBar.setBarStyle('dark-content');
	}

	componentWillUnmount(): void {
		StatusBar.setBarStyle('light-content');
	}

	render() {
		const { covers } = this.state;
		return (
			<FlatList
				style={styles.container}
				data={covers}
				renderItem={this._renderItem}
				keyExtractor={item => item.id.toString()}
			/>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
	},
	card: {
		elevation: 1,
		marginBottom: 20,
	},
	action: {
		justifyContent: 'center',
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	cover: {
		borderRadius: 4,
	},
	button: {
		color: '#fff',
		borderRadius: 50,
	},
	buttonText: {
		fontSize: 12,
	},
	buttonContent: {
		height: 25,
		lineHeight: 25,
		padding: 0,
	},
});
