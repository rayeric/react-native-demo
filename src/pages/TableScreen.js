import * as React from 'react';
import { DataTable, withTheme, Theme } from 'react-native-paper';

class TableScreen extends React.Component {
	static navigationOptions = {
		title: '数据表格',
	};

	state = {
		currentPage: 0,
		totalPage: 5,
	};

	render() {
		return (
			<DataTable>
				<DataTable.Header>
					<DataTable.Title>Dessert</DataTable.Title>
					<DataTable.Title numeric>Calories</DataTable.Title>
					<DataTable.Title numeric>Fat</DataTable.Title>
				</DataTable.Header>

				<DataTable.Row>
					<DataTable.Cell>Frozen yogurt</DataTable.Cell>
					<DataTable.Cell numeric>159</DataTable.Cell>
					<DataTable.Cell numeric>6.0</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row>
					<DataTable.Cell>Ice cream sandwich</DataTable.Cell>
					<DataTable.Cell numeric>237</DataTable.Cell>
					<DataTable.Cell numeric>8.0</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Pagination
					page={this.state.currentPage}
					numberOfPages={this.state.totalPage}
					onPageChange={(page) => {
						this.setState({ currentPage: page });
					}}
					label={this.state.currentPage+1}
					theme={{ dark: true }}
				/>
			</DataTable>
		);
	}
}

export default withTheme(TableScreen);
