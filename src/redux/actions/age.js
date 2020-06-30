//src/redux/actions/age.js

const LOADING_AGE = "age_loading"
const SUCCSESS_AGE = "age_sucess"
const ERROR_AGE = "age_error"

export const API_ACTIONS = {
    LOADING_AGE,
    SUCCSESS_AGE,
    ERROR_AGE
}

export function loadingAgeAction() {
    return {
        type: LOADING_AGE
    }
}
export function completedAgeAction(payload) {
    return {
        type: SUCCSESS_AGE,
        payload: payload
    }
}

export function errorAgeAction(error) {
    return {
        type: ERROR_AGE,
        payload: error
    }
}