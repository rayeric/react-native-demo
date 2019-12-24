import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import SearchModal from '../../components/SearchModal';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import { setToken } from '../../store/actions/actions';
import Carousel from './Carousel';
import CateList from './CateList';
import ProductList from './ProductList';
import TitleBar from '../../components/TitleBar';

function mapStateToProps(state) {
	return {
		token: state.token,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		setToken: (data) => dispatch(setToken(data)),
	};
}

class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			refreshing: false,
		};
	}

	setModalVisible = (v) => {
		this.setState({
			modalVisible: v,
		});
	};

	_onRefresh = () => {
		this.setState({ refreshing: true });
	};

	render() {
		appConstant.setStatusBar();
		return (
			<View style={styles.container}>
				<HomeHeader setModalVisible={this.setModalVisible} {...this.props} />

				<SearchModal {...this.state} setModalVisible={this.setModalVisible}/>

				<ScrollView
					style={styles.content}
					// refreshControl={
					// 	<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>
					// }
				>
					<Carousel/>

					<TitleBar title='宫格'/>
					<CateList/>

					<TitleBar title='瀑布流'/>
					<ProductList/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5F5FC',
	},
	content: {
		marginTop: 0,
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
