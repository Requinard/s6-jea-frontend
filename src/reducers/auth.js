import {LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESFULL, LOGOUT} from "../actions/auth";

export function auth(state = {
    isFetching: false,
    isFailed: false,
    token: "",
    username: "",
    isLoggedIn: false
}, action) {
    switch (action.type) {
        case LOGIN_PENDING:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false,
                isLoggedIn: false,
                username: action.username,
                token: ""
            });
        case LOGIN_SUCCESFULL:
            localStorage.setItem("token", action.result);
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
        case LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn: false,
                token: ""
            })
        default:
            return state
    }
}
