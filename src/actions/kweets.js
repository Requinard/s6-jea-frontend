import request from 'superagent-es6-promise'

export const KWEET_POSTING = "KWEET_POSTING"
export const KWEET_POSTED = "KWEET_POSTED"

export const KWEET_LIST_FETCHING = "KWEET_LIST_FETCHING"
export const KWEET_LIST_FETCHED = "KWEET_LIST_FETCHED"
export const KWEET_LIST_FAILED = "KWEET_LIST_FAILED"

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
        dispatch({type: KWEET_LIST_FETCHING, method: "timeline"})

        return request.get("http://localhost:8080/jea-kwetter-1.0/api/kweets/")
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => dispatch({type: KWEET_LIST_FETCHED, result: result.body}))
            .catch(err => dispatch({type: KWEET_LIST_FAILED, err}))
    }
}

export function setKweets(kweets) {
    return (dispatch) => {
        dispatch({type: KWEET_LIST_FETCHED, result: kweets})
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

export function searchKweets(query) {
    return (dispatch) => {
        dispatch({type: KWEET_LIST_FETCHING, method: "search"})

        request.get(`http://localhost:8080/jea-kwetter-1.0/api/kweets/search/${query}`)
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => dispatch({type: KWEET_LIST_FETCHED, result: result.body}))
            .catch(err => dispatch({type: KWEET_LIST_FAILED, err}))
    }
}
