export const KWEET_POSTING = "KWEET_POSTING"
export const KWEET_POSTED = "KWEET_POSTED"

export function createKweet(kweet) {
    return (dispatch) => {
        dispatch({type: KWEET_POSTING, kweet});

        let realKweet = {
            message: kweet["message"],
            profile: {
                screenname: "john"
            },
            created: 1522236468208,
            likes: [
                {
                    screenname: "hank"
                }
            ]
        };
        return new Promise(function (resolve, reject) {
            setTimeout(() => resolve({result: realKweet}), 1000)
        }).then(body => dispatch({type: KWEET_POSTED, result: body.result}))
    }
}
