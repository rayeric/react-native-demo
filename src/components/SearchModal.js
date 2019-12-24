import React, { Component } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';

export default class SearchModal extends Component {
	state = {
		searchVal: '',
	};

	static propTypes = {
		setModalVisible: PropTypes.func,
		modalVisible: PropTypes.bool,
	};

	render() {
		return (
			<Modal animationType="slide" transparent={false} visible={this.props.modalVisible}
				   onRequestClose={() => this.props.setModalVisible(false)}>
				<ScrollView keyboardShouldPersistTaps="never">
					<View style={{ flex: 1 }}>
						<View style={styles.header}>
							<View style={styles.inputBox}>
								<AntDesign name="search1" size={16}/>
								<TextInput
									value={this.state.searchVal}
									placeholder="搜索"
									autoFocus={true}
									style={styles.textInput}
									onChangeText={(val) => this.setState({ searchVal: val })}
								/>
							</View>
							<TouchableOpacity
								activeOpacity={.5}
								style={{ flex: .12, alignItems: 'flex-end', justifyContent: 'center' }}
								onPress={() => this.props.setModalVisible(false)}
							>
								<Text style={{ color: '#333' }}>取消</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 15,
		paddingRight: 15,
	},
	textInput: {
		height: 28,
		padding: 0,
		paddingLeft: 10,
		paddingRight: 10,
		flex: 1,
	},
	inputBox: {
		height: 28,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: '#F5F5FC',
		borderRadius: 50,
		flex: .88,
	},
});
