import * as React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import {
	Chip,
	Checkbox,
	Snackbar,
	Button,
	Appbar,
	Banner,
	Searchbar,
	Surface,
	Text,
	RadioButton,
} from 'react-native-paper';
import TitleBar from '../components/TitleBar';

export default class OtherScreen extends React.Component {
	static navigationOptions = {
		title: '其他组件',
	};

	state = {
		checked: false,
		visible: false,
		visible2: true,
		firstQuery: '',
		check: 'first',
		value: 'first',
	};

	render() {
		const { firstQuery, check } = this.state;
		return (
			<ScrollView style={{ flex: 1, backgroundColor: '#f5f5fc' }}>
				<TitleBar title={'Searchbar'}/>
				<View style={styles.column}>
					<Searchbar
						placeholder="Search"
						onChangeText={query => {
							this.setState({ firstQuery: query });
						}}
						value={firstQuery}
					/>
				</View>

				<TitleBar title={'Chip'}/>
				<View style={styles.row}>
					<Chip style={{ marginRight: 10 }} mode='flat'>Flat</Chip>
					<Chip style={{ marginRight: 10 }} mode='outlined'>Outlined</Chip>
					<Chip style={{ marginRight: 10 }} icon="heart" onPress={() => console.log('Pressed')}>Icon</Chip>
					<Chip style={{ marginRight: 10 }}
						  avatar={<Image source={require('@/assets/images/cats.jpg')} width={30} height={30}/>}
						  onPress={() => console.log('Pressed')}
					>
						Avatar
					</Chip>
				</View>

				<TitleBar title={'Checkbox'}/>
				<View style={styles.row}>
					<Checkbox
						status={this.state.checked ? 'checked' : 'unchecked'}
						onPress={() => {
							this.setState({ checked: !this.state.checked });
						}}
					/>
					<Checkbox
						color={'red'}
						status={this.state.checked ? 'checked' : 'unchecked'}
						onPress={() => {
							this.setState({ checked: !this.state.checked });
						}}
					/>
				</View>
				<TitleBar title={'RadioButton'}/>
				<View>
					<View style={styles.row}>
						<RadioButton
							value="first"
							status={check === 'first' ? 'checked' : 'unchecked'}
							onPress={() => {
								this.setState({ check: 'first' });
							}}
						/>
						<RadioButton
							value="second"
							status={check === 'second' ? 'checked' : 'unchecked'}
							onPress={() => {
								this.setState({ check: 'second' });
							}}
						/>
					</View>

					<TitleBar title={'RadioButton Group'}/>
					<View style={styles.row}>
						<RadioButton.Group
							onValueChange={value => this.setState({ value })}
							value={this.state.value}
						>
							<View>
								<Text>First</Text>
								<RadioButton value="first"/>
							</View>
							<View>
								<Text>Second</Text>
								<RadioButton value="second"/>
							</View>
						</RadioButton.Group>
					</View>
				</View>

				<TitleBar title={'Snackbar'}/>
				<Button
					mode='contained'
					onPress={() => this.setState(state => ({ visible: !state.visible }))}
				>
					{this.state.visible ? 'Hide Snackbar' : 'Show Snackbar'}
				</Button>
				<Snackbar
					visible={this.state.visible}
					onDismiss={() => this.setState({ visible: false })}
					action={{
						label: 'Undo',
						onPress: () => {
							// Do something
						},
					}}
				>
					Hey there! I'm a Snackbar.
				</Snackbar>

				<TitleBar title={'Appbar'}/>
				<View style={{ paddingTop: 50 }}>
					<Appbar style={styles.bottom}>
						<Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')}/>
						<Appbar.Action icon="email" onPress={() => console.log('Pressed mail')}/>
						<Appbar.Action icon="label" onPress={() => console.log('Pressed label')}/>
						<Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')}/>
					</Appbar>
				</View>

				<TitleBar title={'Banner'}/>
				<Button
					mode='contained'
					onPress={() => this.setState(state => ({ visible2: !state.visible2 }))}
				>
					{this.state.visible2 ? 'Hide Banner' : 'Show Banner'}
				</Button>
				<Banner
					visible={this.state.visible2}
					actions={[
						{
							label: 'Fix it',
							onPress: () => this.setState({ visible2: false }),
						},
						{
							label: 'Learn more',
							onPress: () => this.setState({ visible2: false }),
						},
					]}
					icon={({ size }) =>
						<Image
							source={{ uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4' }}
							style={{
								width: size,
								height: size,
							}}
						/>
					}
				>
					There was a problem processing a transaction on your credit card.
				</Banner>

				<TitleBar title={'Surface'}/>
				<View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }}>
					<Surface style={styles.surface}>
						<Text>Surface1</Text>
					</Surface>
					<Surface style={styles.surface}>
						<Text>Surface2</Text>
					</Surface>
				</View>
			</ScrollView>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
	},
	bottom: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
	},
	surface: {
		padding: 8,
		height: 80,
		width: 80,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 4,
	},
	row: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#fff',
		padding: 10,
	},
	column: {
		backgroundColor: '#fff',
		padding: 10,
	},
});
