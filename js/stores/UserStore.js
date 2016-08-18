import AppDispatcher from '../AppDispatcher';
import { ActionTypes } from '../Constants';
import { EventEmitter } from 'events';

let _data;

class UserStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch(action.actionType) {
				case ActionTypes.RECEIVE_DATA:
					_data = action.data;
					this.emit('receiveData');

				default:
			}

		})

	}

	receiveData() {
		return _data;
	}

}

export default new UserStore();
