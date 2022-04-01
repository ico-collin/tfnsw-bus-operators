import {
	LOAD_BUS_OPERATORS,
	LOAD_BUS_OPERATORS_FAILED
} from '../../types';
import {
	OperatorsState,
	Operator,
	ErrorState
} from '../../contracts/interfaces';
import { CommonStrs } from '../../constants'

const initError: ErrorState = {
	status: -1,
	message: ''
}

const initBusOperatorsState: OperatorsState = {
	operators: [],
	error: initError
};

const BusOperators = (state = initBusOperatorsState,
	{ type, payload }: { type: string, payload: ErrorState | { operators: Operator[]} }) => {
	switch (type) {
		case LOAD_BUS_OPERATORS:
			/**
			 * If loaded bus operators data, then cache it into localStorage.
			 */
			localStorage.setItem(CommonStrs.localStorageOperators, JSON.stringify(payload))
			return {
				...state,
				...payload,
				error: initError
			};
		case LOAD_BUS_OPERATORS_FAILED:
			/**
			 * If failed to load bus operators data, then remove the previous data.
			 * Although keep data in redux state, the error infomation is added.
			 */
			localStorage.removeItem(CommonStrs.localStorageOperators)
			return {
				...state,
				error: payload
			};
		default:
			return state;
	}
}

export default BusOperators
