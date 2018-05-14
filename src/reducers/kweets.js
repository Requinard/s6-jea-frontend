import {
    KWEET_LIKE_FINISHED,
    KWEET_POSTED,
    KWEET_LIST_FAILED,
    KWEET_LIST_FETCHED,
    KWEET_LIST_FETCHING, KWEET_ITEM_ADDED
} from '../actions/kweets'

export function kweets(state = {
    isFetching: false,
    kweets: []
}, action) {
    switch (action.type) {
        case KWEET_POSTED:
            return state;
        case KWEET_ITEM_ADDED:
            let kweetItems = [action.kweet]
            state.kweets.forEach(item => kweetItems.push(item))
            return Object.assign({}, state, {
                kweets: kweetItems.sort((a, b) => b.created - a.created)
            })
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
