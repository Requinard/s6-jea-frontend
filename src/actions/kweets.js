import request from 'superagent-es6-promise'

export const KWEET_POSTING = "KWEET_POSTING"
export const KWEET_POSTED = "KWEET_POSTED"

export const TIMELINE_FETCHING = "TIMELINE_FETCHING"
export const TIMELINE_FETCHED = "TIMELINE_FETCHED"
export const TIMELINE_FAILED = "TIMELINE_FAILED"

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

export function getTimeline() {
    return (dispatch) => {
        dispatch({type: TIMELINE_FETCHING})

        return request.get("http://localhost:8080/jea-kwetter-1.0/api/kweets/")
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => dispatch({type: TIMELINE_FETCHED, result: result.body}))
            .catch(err => dispatch({type: TIMELINE_FAILED, err}))
    }
}
