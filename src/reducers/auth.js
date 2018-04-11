import {LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESFULL} from "../actions/auth";

export function auth(state = {
    isFetching: false,
    isFailed: false,
    token: "",
    isLoggedIn: false
}, action) {
    switch (action.type) {
        case LOGIN_PENDING:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false,
                isLoggedIn: false,
                token: ""
            });
        case LOGIN_SUCCESFULL:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                isLoggedIn: true,
                token: action.result
            });
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
                isLoggedIn: false
            });
        default:
            return state
    }
}
