
//src/redux/agesaga.js

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { loadingAPIAction, errorAPIAction, completedAPIAction } from "./actions/api"

const getageapi = async () => {
    return await fetch("https://api.agify.io?name=manish")
        .then((data) => {
            return data.json().then((value) => {
                return value
            })
        })
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchCount(action) {
    try {
        yield put(loadingAPIAction())
        const count = yield call(getcountapi, action.payload);
        console.log(count)
        yield put(completedAPIAction(count));
    } catch (e) {
        yield put(errorAPIAction(e));
    }
}

function* mySaga() {
    yield takeEvery("COUNT_FETCH_REQUESTED", fetchCount);
}

export default mySaga;
