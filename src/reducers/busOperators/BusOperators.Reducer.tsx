import {
	LOAD_BUS_OPERATORS,
	LOAD_BUS_OPERATORS_FAILED
} from '../../types';
import {
	OperatorsState,
	Operator,
	ErrorState
} from '../../contracts/interfaces';

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
			return {
				...state,
				...payload
			};
		case LOAD_BUS_OPERATORS_FAILED:
			return {
				...state,
				error: payload
			};
		default:
			return state;
	}
}

export default BusOperators
