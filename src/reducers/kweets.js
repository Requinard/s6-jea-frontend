import {
    KWEET_LIKE_FINISHED,
    KWEET_POSTED,
    TIMELINE_FAILED,
    TIMELINE_FETCHED,
    TIMELINE_FETCHING
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
        case TIMELINE_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case TIMELINE_FETCHED:
            return Object.assign({}, state, {
                isFetching: false,
                kweets: action.result
            });
        case TIMELINE_FAILED:
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
