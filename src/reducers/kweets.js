export function kweets(state = {
    isFetching: true,
    kweets: [
        {
            message: "Hello World",
            id: "haha ja"
        }
    ]
}, action) {
    switch (action.type) {
        default:
            return state;
    }
}
