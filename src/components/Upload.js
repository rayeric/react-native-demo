import {  ToastAndroid } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { uploadAvatar } from '../apis/user';

export default class UploadImage {

	static openAlbum = (type, callback) => {
		ImagePicker.openPicker({
			width: 150,
			height: 150,
			cropping: true,
		}).then(image => {
			console.log(image);
			UploadImage._upload(image);
			callback && callback();
		}).catch(e => {
			ToastAndroid.show(e.message, 1000);
		});
	};

	static openCamera = (type, callback) => {
		ImagePicker.openCamera({
			width: 150,
			height: 150,
			cropping: true,
		}).then(image => {
			UploadImage._upload(image);
			callback && callback();
		}).catch(e => {
			ToastAndroid.show(e.message, 1000);
		});
	};

	static _upload = (image) => {
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
			}
		}).catch(err => {
			console.log(err);
			alert('上传失败，请重新选择图片');
		});
	};
}
