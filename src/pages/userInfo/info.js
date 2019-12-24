import React, { Component } from 'react';
import { View, TextInput, Picker, ToastAndroid } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { updateUserInfo } from '../../apis/user';

export default class Info extends Component {
	state = {
		userInfo: this.props.userInfo,
	};

	updateInfo = () => {
		const { getUserInfo } = this.props;
		updateUserInfo(this.state.userInfo).then(res => {
			if (res.state === 1) {
				getUserInfo();
				ToastAndroid.show(res.msg, 1000);
			}
		});
	};

	render() {
		const { isDisabled } = this.props;
		const { userInfo } = this.state;
		return (
			<View style={{ padding: 15 }}>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ flex: .3 }}>昵称：</Text>
					<TextInput
						style={{ flex: .7 }}
						value={userInfo.nick_name}
						editable={isDisabled}
						keyboardType='default'
						onChangeText={(v) => this.setState({ userInfo: Object.assign({}, userInfo, { nick_name: v }) })}
					/>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ flex: .3 }}>性别：</Text>
					<Picker
						selectedValue={userInfo.sex.toString()}
						style={{ flex: .7 }}
						mode="dialog"
						enabled={isDisabled}
						onValueChange={(itemValue) => this.setState({ userInfo: Object.assign({}, userInfo, { sex: itemValue }) })}
					>
						<Picker.Item label="其他" value="0"/>
						<Picker.Item label="男" value="1"/>
						<Picker.Item label="女" value="2"/>
					</Picker>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ flex: .3 }}>年龄：</Text>
					<TextInput
						style={{ flex: .7 }}
						value={userInfo.age.toString()}
						editable={isDisabled}
						keyboardType='default'
						onChangeText={(v) => this.setState({ userInfo: Object.assign({}, userInfo, { age: v }) })}
					/>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ flex: .3 }}>邮箱：</Text>
					<TextInput
						style={{ flex: .7 }}
						value={userInfo.email}
						editable={isDisabled}
						keyboardType='numeric'
						onChangeText={(v) => this.setState({ userInfo: Object.assign({}, userInfo, { email: v }) })}
					/>
				</View>

				<View
					style={{
						flexDirection: 'row', justifyContent: 'center', padding: 15,
						// position: 'absolute', bottom: 0, left: 0, right: 0,
					}}>
					<Button
						mode="contained"
						style={{ flex: 0.4 }}
						color={isDisabled ? '' : '#F5F5FC'}
						onPress={this.updateInfo}
					>
						{isDisabled ? '保存' : '编辑资料'}
					</Button>
				</View>
			</View>
		);
	}
}
