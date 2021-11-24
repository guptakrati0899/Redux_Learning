import {applyMiddleware, createStore} from 'redux'
import incrementReducer from './reducer'
import thunk from 'redux-thunk'

export const store = createStore(incrementReducer,applyMiddleware(thunk))