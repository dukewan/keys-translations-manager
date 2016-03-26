import { LOAD_MESSAGES, ALERT_ERRORS, LOAD_COUNTS, CLEAR_ERRORS } from '../constants/ActionTypes'

export default function errors(state = [], action) {
	switch (action.type) {
		case ALERT_ERRORS:
			return action.errors;
		case LOAD_MESSAGES:
		case LOAD_COUNTS:
		case CLEAR_ERRORS:
			return [];
		default:
			return state;
	}
}