import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import SelectBank from './components/SelectBank';
import Details from './components/Details';
import Transaction from './components/Transaction';
import style from './styles/style.css';

class App extends Component{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={SelectBank} />
			<Route path="details" component={Details} />
			<Route path="transaction/:accountId" component={Transaction} />
		</Route>
	</Router>
, document.getElementById('react'));
