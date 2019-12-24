import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const CardComponent = () => (
	<Card>
		<Card.Title title="Card Title" subtitle="Card Subtitle"
					left={(props) => <Avatar.Icon {...props} icon="folder"/>}/>
		<Card.Content>
			<Title>Card title</Title>
			<Paragraph>Card content</Paragraph>
		</Card.Content>
		<Card.Cover source={{ uri: 'https://picsum.photos/700' }}/>
		<Card.Actions>
			<Button>Cancel</Button>
			<Button>Ok</Button>
		</Card.Actions>
	</Card>
);

export default class CardScreen extends React.Component {
	static navigationOptions = {
		title: '卡片组件',
	};

	render() {
		return (
			<View style={{padding: 15}}>
				<CardComponent/>
			</View>
		);
	}
}
