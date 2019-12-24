import React, { Component } from 'react';
import { View, Modal, TouchableWithoutFeedback, StyleSheet, ToastAndroid, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { uploadAvatar } from '../apis/user';

export default class BottomDrawer extends Component {
	static propTypes = {
		getUserInfo: PropTypes.func,
		visible: PropTypes.bool,
		hideDrawer: PropTypes.func,
	};

	openAlbum = (type, callback) => {
		ImagePicker.openPicker({
			width: 96,
			height: 96,
			cropping: true,
		}).then(image => {
			console.log(image);
			this._upload(image);
			callback && callback();
		}).catch(e => {
			ToastAndroid.show(e.message, 1000);
		});
	};

	openCamera = (type, callback) => {
		ImagePicker.openCamera({
			width: 96,
			height: 96,
			cropping: true,
		}).then(image => {
			this._upload(image);
			callback && callback();
		}).catch(e => {
			ToastAndroid.show(e.message, 1000);
		});
	};

	_upload = (image) => {
		const { getUserInfo } = this.props;
		const ary = image.path.split('.');
		let formData = new FormData();
		let file = {
			uri: image.path,
			type: 'multipart/form-data',
			name: Date.now() + '.' + ary[ary.length - 1],
		};
		formData.append('image', file);
		uploadAvatar(formData).then(r => {
			if (r.state === 1) {
				ImagePicker.clean().then(() => {
					console.log('removed all tmp images from tmp directory');
				}).catch(e => {
					alert(e);
				});
				getUserInfo();
			}
		}).catch(err => {
			console.log(err);
			alert('上传失败，请重新选择图片');
		});
	};

	// shouldComponentUpdate(nextProps, nextState): boolean {
	// 	if(nextProps.visible) {
	// 		StatusBar.setBackgroundColor('rgba(0,0,0,.7)', true)
	// 	} else {
	// 		StatusBar.setBackgroundColor('transparent', true);
	// 	}
	// 	return true
	// }

	render() {
		const { visible, hideDrawer } = this.props;
		return (
			<Modal animationType="slide" transparent={true} visible={visible}
				   onRequestClose={hideDrawer}
			>
				<TouchableWithoutFeedback onPress={hideDrawer}>
					<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.7)' }}></View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback>
					<View>
						<Button
							onPress={() => this.openAlbum('avatar', hideDrawer)}
							style={styles.item}
							color='#000'
							contentStyle={styles.content}>从相册中选择图片</Button>
						<Button
							onPress={() => this.openCamera('avatar', hideDrawer)}
							style={styles.item}
							color='#000'
							contentStyle={styles.content}>拍照</Button>
						<View style={{ backgroundColor: '#F5F5FC', height: 15 }}/>
						<Button
							onPress={hideDrawer}
							style={styles.item}
							color='#000'
							contentStyle={styles.content}>取消</Button>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#FFFFFF',
		borderRadius: 0,
		borderBottomWidth: 1,
		borderBottomColor: '#F5F5FC',
	},
	content: {
		padding: 5,
	},
});
