import React, {Component} from 'react';
const LineChart = require('react-chartjs').Line;

import UserStore from '../stores/UserStore';
import TableData from './TableData';

export default class Transaction extends Component {
	constructor(props) {
		super(props);
		const transactions = UserStore.receiveTransactions(this.props.params.accountId);
		console.log('transactions', transactions);
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
			transactions: UserStore.receiveTransactions(this.props.params.accountId)
		})
	}



	render() {
		const {params} = this.props;
		console.log('params.accountId', params.accountId);
		return (
			<div className="container">
				<LineChart data={this.state.datas} options={this.state.scales} width="600" height="250"/>
				<TableData />

			</div>
		)
	}
}
