import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import SelectBank from './components/SelectBank';
import Details from './components/Details';

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
		</Route>
	</Router>
, document.getElementById('react'));
