import React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

export default class FloatBar extends React.Component {
	static navigationOptions = {
		title: '浮动按钮',
	};

	state = {
		open: true,
	};

	render() {
		return (
			<Provider>
				<Portal>
					<FAB.Group
						open={this.state.open}
						icon={this.state.open ? 'calendar-today' : 'plus'}
						actions={[
							{ icon: 'plus', onPress: () => console.log('Pressed add') },
							{ icon: 'star', label: 'Star', onPress: () => console.log('Pressed star') },
							{ icon: 'email', label: 'Email', onPress: () => console.log('Pressed email') },
							{ icon: 'bell', label: 'Remind', onPress: () => console.log('Pressed notifications') },
						]}
						onStateChange={({ open }) => this.setState({ open })}
						onPress={() => {
							if (this.state.open) {
								// do something if the speed dial is open
							}
						}}
					/>
				</Portal>
			</Provider>
		);
	}
}
