import React, {Component} from 'react';
import { browserHistory } from 'react-router';

export default class NavDivs extends Component {
	constructor(props) {
		super(props);

		this.viewTransactions = this.viewTransactions.bind(this);
	}

	viewTransactions(accountId) {
		// console.log('accountId', accountId);
		browserHistory.push(`/transaction/${accountId}`);
	}

	render() {
		const { account } = this.props;
		return (
			<div style={styles.container} className='text-md-center text-sm-center'>
				<div className="card col-md-5" style={styles.card}>
					<div className="card-block">
						<h5 className="card-title">{account.meta.name} {account.meta.number}</h5>
						<p>
							Type: {account.type}
							<If condition={account.subtype}>
								{ ' |' } {account.subtype}
							</If>
						</p>
						<p className="card-text">
							<span><em>Available: <strong>${account.balance.available}</strong></em></span>
							{ ' | ' }
							<span><em>Current: <strong>${account.balance.current}</strong></em></span>
						</p>
						<button
							className="btn btn-success-outline"
							onClick={() => this.viewTransactions(account._id)}
							style={styles.button}>View Transactions</button>
					</div>
				</div>

			</div>
		)
	}
}

const styles = {
	container: {
		paddingLeft: 100
	},
	card: {
		height: 300,
		color: '#696969',
	},
	button : {
		borderWidth: 2
	},

}
