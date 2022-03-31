import { Dispatch } from 'redux';

import {
	LOAD_BUS_OPERATORS,
	LOAD_BUS_OPERATORS_FAILED
} from '../../types';
import { HandleError } from '../../utils';

export const loadBusOperators = () => {
	return async (dispatch: Dispatch) => {
		try {
			/**
			 * If has the real API url, then await fetch(${theUrl}).
			 * In this case, just call to get local json file as example data.
			 */
			const resp = await fetch('../bus-services.example.json',{
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				method : 'GET'
			})
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
