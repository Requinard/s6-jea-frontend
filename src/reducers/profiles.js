export function profiles(state = {
    isFetching: false,
    profile: {
        screenname: "john",
        bio: "Chillin' like a villain",
        location: "Eindhoven",
        website: "http://benenruurd.com",
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
    }
}, action) {
    switch (action.type) {
        default:
            return state
    }
}
