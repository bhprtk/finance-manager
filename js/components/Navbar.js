import React, {Component} from 'react';

import NavDivs from './NavDivs';

export default class Navbar extends Component {
	render() {
		const { accounts } = this.props;
		console.log('accounts', accounts);
		return (
			<div className="text-md-center">
				<div className="container">
					<p style={styles.title}>ACCOUNTS</p>
					<div className="row">
						<If condition={accounts}>
							{accounts.map((account, index) => {
								return <NavDivs key={index} account={account} />

							})}
						</If>

					</div>

				</div>
			</div>
		)
	}
}

const styles = {
	navbar: {
		height: 100
	},
	title: {
		fontSize: 40,
		fontFamily: `'Lato', sans-serif`,
		// fontFamily: `'Droid Sans', sans-serif`
		// fontFamily: `'Droid Serif', serif`
	}
}
