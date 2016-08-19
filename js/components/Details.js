import React, {Component} from 'react';

import UserStore from '../stores/UserStore';
import Navbar from './Navbar';

export default class Details extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {}
		}
	}

	componentDidMount() {
		this.setState({data: UserStore.receiveData()});
	}


	render() {
		return (
			<If condition={this.state.data}>
				<Navbar accounts={this.state.data.accounts}/>

			</If>
		)
	}
}
