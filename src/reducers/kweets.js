import {KWEET_POSTED} from '../actions/kweets'

export function kweets(state = {
    isFetching: true,
    kweets: [
        {
            message: "Automated entry message",
            profile: {
                screenname: "john"
            },
            created: 1522236468208,
            likes: [
                {
                    screenname: "hank"
                }
            ]
        }
    ]
}, action) {
    switch (action.type) {
        case KWEET_POSTED:
            return Object.assign({}, state, {
                kweets: [action.result].concat(state.kweets)
            })
        default:
            return state;
    }
}
