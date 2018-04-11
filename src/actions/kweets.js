import request from 'superagent-es6-promise'

export const KWEET_POSTING = "KWEET_POSTING"
export const KWEET_POSTED = "KWEET_POSTED"

export const TIMELINE_FETCHING = "TIMELINE_FETCHING"
export const TIMELINE_FETCHED = "TIMELINE_FETCHED"
export const TIMELINE_FAILED = "TIMELINE_FAILED"

export const KWEET_LIKE_FINISHED = "KWEET_LIKE_FINISHED"

export function createKweet(kweet) {
    return (dispatch) => {
        dispatch({type: KWEET_POSTING, kweet});

        return request.post(`http://localhost:8080/jea-kwetter-1.0/api/kweets/create`)
            .set("Content-Type", "application/json")
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .send({
                message: kweet.message
            })
            .then(result => dispatch({type: KWEET_POSTED, result: result.body}))
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

export function setKweets(kweets) {
    return (dispatch) => {
        dispatch({type: TIMELINE_FETCHED, result: kweets})
    }
}

export function likeKweet(kweet) {
    return (dispatch) => {
        dispatch({type: "KWEET_LIKE_PENDING", kweet})

        request.post(`http://localhost:8080/jea-kwetter-1.0/api/kweets/${kweet.id}`)
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => {
                dispatch({type: KWEET_LIKE_FINISHED, data: result.body})
            })
            .catch(err => dispatch({type: "KWEET_LIKE_FAILED", err, kweet}))
    }
}
