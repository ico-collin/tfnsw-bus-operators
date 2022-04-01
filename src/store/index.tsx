import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { CommonStrs } from '../constants'
import { RootReducer } from '../reducers'

/**
 * help to configure store; if the env is 'production', then no need redux dev tool
 * @returns configure store function
 */
export const ConfigStore = () => createStore(
  RootReducer,
  process.env.NODE_ENV !== CommonStrs.pd
  ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

)
