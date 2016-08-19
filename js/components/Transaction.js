import React, {Component} from 'react';
const LineChart = require('react-chartjs').Line;
import {browserHistory} from 'react-router';

import UserStore from '../stores/UserStore';
import TableData from './TableData';

export default class Transaction extends Component {
	constructor(props) {
		super(props);
		const transactions = UserStore.receiveTransactions(this.props.params.accountId);
		this.state = {
			datas: {
        labels: transactions.map(transaction => transaction.date).reverse(),
        datasets: [{
            label: '# of Votes',
            data: transactions.map(transaction => transaction.amount.toFixed(2)).reverse(),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
			scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
		}
	}

	componentDidMount() {
		this.setState({
			transactions: UserStore.receiveTransactions(this.props.params.accountId),
			account: UserStore.receiveAccount(this.props.params.accountId)
		})
	}



	render() {
		const {params} = this.props;
		return (
			<div className="container">

				<button
					className="btn btn-danger-outline"
					onClick={() => {browserHistory.push('/details')}}>
					Go Back
				</button>

				<If condition={this.state.account}>
					<p className="titleStyle">Spending Graph for {this.state.account[0].meta.name} {this.state.account[0].meta.number}</p>
				</If>
				<hr/>
				<LineChart data={this.state.datas} options={this.state.scales} width="600" height="250"/>
				<hr/>

			<If condition={this.state.transactions}>
				<TableData transactions={this.state.transactions} account={this.state.account[0]}/>
			</If>
			</div>
		)
	}
}
