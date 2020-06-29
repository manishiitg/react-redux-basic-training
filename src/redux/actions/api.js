//src/redux/actions/api.js

const LOADING_API = "api_loading"
const SUCCSESS_API = "api_sucess"
const ERROR_API = "api_error"

export const API_ACTIONS = {
    LOADING_API,
    SUCCSESS_API,
    ERROR_API
}

export function loadingAPIAction() {
    return {
        type: LOADING_API
    }
}
export function completedAPIAction(payload) {
    return {
        type: SUCCSESS_API,
        payload: payload
    }
}

export function errorAPIAction(error) {
    return {
        type: ERROR_API,
        payload: error
    }
}

export function callAPI() {
    return (dispatch) => {
        dispatch(loadingAPIAction())
        fetch("https://api.countapi.xyz/hit/etechstrainig/count")
            .then((data) => {
                data.json().then((value) => {
                    console.log(value)
                    dispatch(completedAPIAction(value))
                })
            }).catch((err) => {
                dispatch(errorAPIAction(err))
            })
    }
}