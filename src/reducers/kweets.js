import {
    KWEET_LIKE_FINISHED,
    KWEET_POSTED,
    KWEET_LIST_FAILED,
    KWEET_LIST_FETCHED,
    KWEET_LIST_FETCHING
} from '../actions/kweets'

export function kweets(state = {
    isFetching: false,
    kweets: []
}, action) {
    switch (action.type) {
        case KWEET_POSTED:
            return Object.assign({}, state, {
                kweets: [action.result].concat(state.kweets)
            });
        case KWEET_LIST_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case KWEET_LIST_FETCHED:
            return Object.assign({}, state, {
                isFetching: false,
                kweets: action.result
            });
        case KWEET_LIST_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
            });
        case KWEET_LIKE_FINISHED:
            return Object.assign({}, state, {
                kweets: state.kweets.map(kweet => kweet.id === action.data.id ? action.data : kweet)
            });
        default:
            return state;
    }
}
