import React, { Component } from 'react';

export default class SelectBank extends Component {
	constructor(props) {
		super(props);

		this.openSandbox = this.openSandbox.bind(this);
		this.onSuccess = this.onSuccess.bind(this);

		const sandboxHandler = Plaid.create({
			  env: 'tartan',
			  clientName: 'Client Name',
			  key: 'test_key',
			  product: 'connect',
			  onSuccess: function(public_token, metadata) {
			    console.log('public_token', public_token);
			    console.log('metadata', metadata);
					SelectBank.onSuccess();
			  },
			});

			this.state = {
				sandboxHandler
			}
	}

	openSandbox() {
		this.state.sandboxHandler.open();
	}

	onSuccess() {
		console.log('here');
	}

	render() {
		return (
			<div className="container">
				<h1>hello form SelectBank</h1>
				<button
					className="btn btn-primary"
					onClick={this.openSandbox}>
					Select Bank
				</button>
			</div>
		)
	}
}
