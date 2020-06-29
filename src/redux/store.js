//src/redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux'

import todo from "./reducers/todo"
import api from './reducers/api'

import thunk from 'redux-thunk';

export default createStore(combineReducers({
    todo,
    api
}), {}, applyMiddleware(thunk))
