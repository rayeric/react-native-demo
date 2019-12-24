import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import SWiper from 'react-native-swiper';

export default class Carousel extends Component {
	state = {
		items: [],
	};

	render() {
		return (
			<View style={styles.container}>
				<SWiper
					width={Dimensions.get('window').width}
					height={150}
					horizontal={true}
					showsButtons={false}
					paginationStyle={{ bottom: 5 }}
					activeDot={<View style={styles.activeDot}></View>}
					autoplay={true}
					autoplayTimeout={5}
				>
					<Image source={require('@/assets/swiper/p07.jpg')} style={styles.img}/>
					<Image source={require('@/assets/swiper/p08.jpg')} style={styles.img}/>
					{/*<Image source={require('@/assets/swiper/p01.jpg')} style={styles.img}/>*/}
					{/*<Image source={require('@/assets/swiper/p02.jpg')} style={styles.img}/>*/}
				</SWiper>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 150,
		marginTop: 10
	},
	img: {
		width: Dimensions.get('window').width,
		height: 150,
	},
	activeDot: {
		backgroundColor: '#F5F5F5',
		height: 8,
		width: 8,
		borderRadius: 4,
		marginLeft: 3,
		marginRight: 3
	}
});
