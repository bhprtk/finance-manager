import AppDispatcher from  "../AppDispatcher";
import {ActionTypes} from "../Constants";

let UserActions = {
	dataReceived(data) {
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_DATA,
			data
		})
	}
}

export default UserActions;
