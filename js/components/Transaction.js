import React, {Component} from 'react';

import UserStore from '../stores/UserStore';

export default class Transaction extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('transactions', UserStore.recieveTransactions(this.props.params.accountId));
	}



	render() {
		const {params} = this.props;
		console.log('params.accountId', params.accountId);
		return (

			<h1>Transaction</h1>
		)
	}
}
