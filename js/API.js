import {get, post, ajax, put} from 'jquery';
import UserActions from './actions/UserActions';

let API = {
	getData(bankData) {
		post('https://tartan.plaid.com/connect/', bankData)
			.then(res => {
				console.log('res', res);
			})
			.catch(err => {
				console.log('err', err);
			})
	}
}

export default API;
