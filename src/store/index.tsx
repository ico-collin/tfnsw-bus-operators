import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { CommonStrs } from '../constants'
import { RootReducer } from '../reducers'

export const ConfigStore = () => createStore(
  RootReducer,
  process.env.NODE_ENV !== CommonStrs.pd
    ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
)
