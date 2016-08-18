import React, { Component } from 'react';

export default class SelectBank extends Component {
	constructor(props) {
		super(props);

		this.openSandbox = this.openSandbox.bind(this);
		this.getData = this.getData.bind(this);
	}

	openSandbox() {
		const sandboxHandler = Plaid.create({
			  env: 'tartan',
			  clientName: 'Client Name',
			  key: 'test_key',
			  product: 'connect',
			  onSuccess: (public_token, metadata) => {
			    this.getData(metadata.institution.type)
			  }
			});
		sandboxHandler.open();
	}

	getData(data) {
		let infoObj = {
			client_id: 'test_id',
			secret: 'test_secret',
			username: 'plaid_test',
			password: 'plaid_good',
			type: data
		}
	}

	render() {
		return (
			<div className="container text-md-center" style={styles.container}>
				<button
					className="btn btn-success-outline"
					onClick={this.openSandbox}
					style={styles.button}>
					<h1>
						Select Bank
					</h1>
				</button>
			</div>
		)
	}
}

const styles = {
	container: {
		paddingTop: 300
	},
	button: {
		width: 500,
		height: 100,
		borderWidth: 3
	}
}
