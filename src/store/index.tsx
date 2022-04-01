import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { RootReducer } from '../reducers'

/**
 * help to configure store; if the env is 'production', then no need redux dev tool
 * @returns configure store function
 */
export const ConfigStore = () => createStore(
  RootReducer,
  applyMiddleware(thunk)
)
