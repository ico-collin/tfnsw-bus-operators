import { Dispatch } from 'redux';

import {
	LOAD_BUS_OPERATORS,
	LOAD_BUS_OPERATORS_FAILED
} from '../../types';
import { HandleError } from '../../utils';

export const loadBusOperators = () => {
	return async (dispatch: Dispatch) => {
		try {
			const resp = await fetch('http://myjson.dit.upm.es/api/bins/86mz');
			const payload = await resp.json();
			dispatch({
				type: LOAD_BUS_OPERATORS,
				payload
			});
		} catch (error) {
			HandleError(dispatch,
				LOAD_BUS_OPERATORS_FAILED,
				{
					status: 500,
					message: 'Internal server error.'
				}
			);
		}
	}
}
