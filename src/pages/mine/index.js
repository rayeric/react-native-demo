import React, { Component } from 'react';
import { View, RefreshControl, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import MenuList from './MenuList';
import { getUserInfoAction } from '../../store/actions/actions';

function mapStateToProps(state) {
	return {
		userInfo: state.userInfo,
	};
}

class MineScreen extends Component {
	state = {
		refreshing: false,
	};

	componentDidMount() {
		this._getUserInfo();
	}

	_getUserInfo = () => {
		const { dispatch } = this.props;
		dispatch(getUserInfoAction()).then(() => {
			this.setState({
				refreshing: false,
			});
		});
	};

	render() {
		return (
			<ScrollView
				style={{ flex: 1, backgroundColor: '#F5F5FC' }}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this._getUserInfo}
					/>
				}
			>
				<View style={{ flex: 1 }}>
					<Avatar {...this.props}/>
					<MenuList {...this.props} />
				</View>
			</ScrollView>
		);
	}
}

export default connect(mapStateToProps)(MineScreen);
