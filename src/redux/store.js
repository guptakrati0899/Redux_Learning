import {createStore} from 'redux'
import incrementReducer from './reducer'

export const store = createStore(incrementReducer)