//src/redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux'

import todo from "./reducers/todo"
import api from './reducers/api'

// import thunk from 'redux-thunk';

import mySaga from "./saga"

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()


export default createStore(combineReducers({
    todo,
    api
}), {}, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(mySaga)
