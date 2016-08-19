import React, {Component} from 'react';

import UserStore from '../stores/UserStore';
import Navbar from './Navbar';
import API from '../API';

export default class Details extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {}
		}

		this.receiveData = this.receiveData.bind(this);
	}


	componentDidMount() {
		let infoObj = {
			client_id: 'test_id',
			secret: 'test_secret',
			username: 'plaid_test',
			password: 'plaid_good',
			type: 'wells'
		}
		API.getData(infoObj);
		UserStore.on("receiveData", this.receiveData);
	}

	receiveData() {
		this.setState({data: UserStore.receiveData()});
	}

	componentWillUnmount() {
		UserStore.removeListener("receiveData", this.receiveData)
	}

	render() {
		return (


			<If condition={this.state.data}>
				<Navbar accounts={this.state.data.accounts}/>

			</If>
		)
	}
}
