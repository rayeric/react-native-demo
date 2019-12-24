import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		align: PropTypes.oneOf(['left', 'center', 'right']),
		color: PropTypes.string,
	};

	render() {
		let justifyContent = 'flex-start';
		const { title, align, color } = this.props;
		switch (align) {
			case 'left':
				break;
			case 'center':
				justifyContent = 'center';
				break;
			case 'right':
				justifyContent = 'flex-end';
				break;
			default:
				break;
		}
		return (
			<View style={[styles.container, { justifyContent: justifyContent }]}>
				<View></View>
				<Text style={[styles.title, { color: color ? color : '#000' }]}>{title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 45,
		backgroundColor: '#fff',
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		marginBottom: 10,
		marginTop: 10,
		elevation: .2
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
