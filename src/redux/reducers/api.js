//src/redux/reducers/api.js


import { API_ACTIONS } from "../actions/api"

const reducer = (data = {
    "loading": false,
    "data": {},
    "errormsg": ""
}, action) => {
    if (action.type === API_ACTIONS.LOADING_API) {
        data = {
            ...data,
            "loading": true
        }
    } else if (action.type === API_ACTIONS.SUCCSESS_API) {
        data = Object.assign({}, data, {
            data: action.payload,
            loading: false
        })
    } else if (action.type === API_ACTIONS.ERROR_API) {
        data = {
            "loading": false,
            "data": {},
            "errormsg": action.payload
        }
    }
    // console.log(data)
    // console.log("action type" , action.type)
    // showing here different ways to update state
    return data
}

export default reducer