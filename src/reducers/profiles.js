import {PROFILE_FAILED, PROFILE_FETCHED, PROFILE_FETCHING} from "../actions/profiles";

export function profiles(state = {
    isFetching: false,
    isFailed: false,
    profile: null
}, action) {
    switch (action.type) {
        case PROFILE_FETCHING:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false
            });
        case PROFILE_FETCHED:
            return Object.assign({}, state, {
                isFetching: false,
                profile: action.data
            });
        case PROFILE_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
            })
        default:
            return state
    }
}
