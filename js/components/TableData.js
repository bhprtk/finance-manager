import React, {Component} from 'react';

export default class TableData extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const {transactions, account} = this.props;
		let tableData = transactions.map((transaction, index) => {
			return (
				<tr key={index}>
					<td>{transaction.date}</td>
					<td>{transaction.name}</td>
					<td>${transaction.amount}</td>
					<td>{transaction.meta.location.city} {transaction.meta.location.state}</td>
				</tr>
			)
		})

		return (
			<div style={styles.container}>
				<p className="titleStyle">Transactions for {account.meta.name} {account.meta.number}</p>

				<table className="table table-hover">
					<thead>
						<tr>
							<th>Date</th>
							<th>Name</th>
							<th>Amount</th>
							<th>Location</th>
						</tr>
					</thead>
					<tbody>
						{tableData}
					</tbody>
				</table>

			</div>
		)
	}
}

const styles = {
	container: {
		color: '#696969'
	}
}
