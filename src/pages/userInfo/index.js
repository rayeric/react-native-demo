import React, { Component } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { getUserInfoAction } from '../../store/actions/actions';
import Backdrop from './Backdrop';
import Info from './info';
import BottomDrawer from '../../components/BottomDrawer';
import { IconButton } from 'react-native-paper';

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo,
		cover: state.cover,
	};
}

class UserInfoScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: '我的资料',
		headerTitleStyle: {
			color: '#fff',
			fontSize: appConstant.fontSize,
			flex: 1,
			textAlign: 'center',
		},
		headerLeft: <IconButton icon='arrow-left' color={'#fff'} size={appConstant.backSize}
								onPress={() => navigation.goBack()}/>,
		headerRight: <View/>,
	});

	state = {
		isDisabled: true,
		drawerVisible: false,
	};

	_getUserInfo = () => {
		const { dispatch } = this.props;
		dispatch(getUserInfoAction());
	};

	componentDidMount(): void {
		StatusBar.setBarStyle('light-content');
	}

	componentWillUnmount(): void {
		StatusBar.setBarStyle('dark-content');
	}

	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<Backdrop {...this.state} {...this.props} showDrawer={() => this.setState({ drawerVisible: true })}/>

				<Info {...this.state} {...this.props} getUserInfo={this._getUserInfo}/>

				<BottomDrawer
					visible={this.state.drawerVisible}
					hideDrawer={() => this.setState({ drawerVisible: false })}
					getUserInfo={this._getUserInfo}
				/>
			</ScrollView>
		);
	}
}

export default connect(mapStateToProps)(UserInfoScreen);
