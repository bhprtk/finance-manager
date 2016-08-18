import {get, post, ajax, put} from 'jquery';
import UserActions from './actions/UserActions';


let API = {
	getData(bankData) {
		post('/users', bankData)
			.then(res => {
				UserActions.dataReceived(res);
			})
			.catch(err => {
				console.log('err', err);
			})


	},




}

export default API;
