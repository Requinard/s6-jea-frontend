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
        default:
            return state;
    }
}
