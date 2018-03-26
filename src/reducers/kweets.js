export function kweets(state = {
    isFetching: true,
    kweets: [
        {
            message: "Hello World"
        }
    ]
}, action) {
    switch (action.type) {
        default:
            return state;
    }
}
