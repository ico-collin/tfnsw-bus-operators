import { Dispatch, AnyAction } from "redux";

import { ErrorState } from '../contracts/interfaces'

/**
 * Error handler
 * @param {Dispatch<AnyAction>} dispatch [send error to reducer]
 * @param {string}              type     [select the type of error]
 * @param {ErrorState}          payload  [the error content]
 */
const handleError = (dispatch: Dispatch<AnyAction>,
  type: string, payload: ErrorState) => {
  dispatch({
    type,
    payload
  })
}

export default handleError
