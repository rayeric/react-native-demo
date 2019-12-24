import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

export default class LoginInput extends Component {
	static propTypes = {
		value: PropTypes.any.isRequired,
		iconName: PropTypes.string.isRequired,
		changeValue: PropTypes.func.isRequired,
		autoFocus: PropTypes.bool,
		secureTextEntry: PropTypes.bool,
		keyboardType: PropTypes.string,
		placeholder: PropTypes.string,
	};

	render() {
		return (
			<View style={styles.inputBox}>
				<Icon name={this.props.iconName} size={18} color="#ccc" style={styles.inputIcon}/>
				<TextInput
					style={styles.textInput}
					value={this.props.value}
					autoFocus={this.props.autoFocus || false}
					placeholder={this.props.placeholder || ''}
					secureTextEntry={this.props.secureTextEntry || false}
					keyboardType={this.props.keyboardType || 'default'}
					onChangeText={(v) => this.props.changeValue(v)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputBox: {
		marginBottom: 15,
		flexDirection: 'row',
		backgroundColor: '#f1f1f1',
		alignItems: 'center',
		borderRadius: 4,
		paddingLeft: 10,
		paddingRight: 10,
	},
	textInput: {
		height: 40,
		paddingTop: 0,
		paddingBottom: 0,
		flex: .9,
	},
	inputIcon: {
		flex: .1,
	},
});
