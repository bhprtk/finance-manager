import React, {Component} from 'react';

import UserStore from '../stores/UserStore';

export default class Details extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log('receiveData', UserStore.receiveData());
	}


	render() {
		return (
			<div className="container">
				<h1>
					Details
				</h1>

			</div>
		)
	}
}
