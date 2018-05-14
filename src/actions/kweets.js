import request from 'superagent-es6-promise'
import {showSnack} from "react-redux-snackbar";

export const KWEET_POSTING = "KWEET_POSTING"
export const KWEET_POSTED = "KWEET_POSTED"

export const KWEET_LIST_FETCHING = "KWEET_LIST_FETCHING"
export const KWEET_LIST_FETCHED = "KWEET_LIST_FETCHED"
export const KWEET_LIST_FAILED = "KWEET_LIST_FAILED"

export const KWEET_LIKE_FINISHED = "KWEET_LIKE_FINISHED"

export const KWEET_ITEM_ADDED = "KWEET_ITEM_ADDED"

export function createKweet(kweet) {
    return (dispatch) => {
        dispatch({type: KWEET_POSTING, kweet});

        return request.post(`http://localhost:8080/jea-kwetter-1.0/api/kweets/create`)
            .set("Content-Type", "application/json")
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .send({
                message: kweet.message
            })
            .then(result => {
                dispatch({type: KWEET_POSTED, result: result.body})
                dispatch(showSnack("create kweet", {
                    label: "Posted kweet to your timeline!",
                    timeout: 1000
                }))
            })
            .catch(err => dispatch({
                label: "Failed to post kweet!",
                timeout: 2000
            }))
    }
}

export function getTimeline() {
    return (dispatch) => {
        dispatch({type: KWEET_LIST_FETCHING, method: "timeline"})

        return request.get("http://localhost:8080/jea-kwetter-1.0/api/kweets/")
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => dispatch({type: KWEET_LIST_FETCHED, result: result.body}))
            .catch(err => {
                dispatch({type: KWEET_LIST_FAILED, err})
                dispatch(showSnack("create_kweet_failed", {
                    label: "Failed to fetch timeline!",
                    timeout: 2000
                }))
            })
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
                dispatch(showSnack("like_kweet", {
                    label: "You liked this kweet!",
                    timeout: 1000
                }))
            })
            .catch(err => {
                dispatch({type: "KWEET_LIKE_FAILED", err, kweet})
                dispatch(showSnack("like_kweet_failed", {
                    label: "Failed to like kweet!",
                    timeout: 2000
                }))
            })
    }
}

export function searchKweets(query) {
    return (dispatch) => {
        dispatch({type: KWEET_LIST_FETCHING, method: "search"})

        request.get(`http://localhost:8080/jea-kwetter-1.0/api/kweets/search/${query}`)
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => dispatch({type: KWEET_LIST_FETCHED, result: result.body}))
            .catch(err => {
                dispatch({type: KWEET_LIST_FAILED, err})
                dispatch(showSnack("search_kweets_failed", {
                    label: 'Failed to search for kweets.',
                    timeout: 2000
                }))
            })
    }
}

export function addKweetFromSocket(kweet){
    return (dispatch) =>{
        dispatch({type: KWEET_ITEM_ADDED, kweet})
        dispatch(showSnack("kweet_from_ws", {
            label: 'Received a kweet from ws',
            timeout: 2000
        }))
    }
}
