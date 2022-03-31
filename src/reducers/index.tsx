import { combineReducers } from 'redux'

import BusOperators from './busOperators/BusOperators.Reducer'

/**
 * The Root Reducer.
 * All sub-reducers would be collected.
 */
export const RootReducer = combineReducers({
  BusOperators
})
