import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import userReducer from './userReducer'

const rootReducer = combineReducers({
    user: userReducer
})
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))