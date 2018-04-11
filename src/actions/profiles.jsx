import request from 'superagent-es6-promise'

export const PROFILE_FETCHING = "PROFILE_FETCHING"
export const PROFILE_FETCHED = "PROFILE_FETCHED"
export const PROFILE_FAILED = "PROFILE_FAILED"

export function getProfile(profileName) {
    return (dispatch) => {
        dispatch({type: PROFILE_FETCHING, profileName})

        return request.get(`http://localhost:8080/jea-kwetter-1.0/api/profiles/${profileName}`)
            .set('Content-Type', 'application/json')
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => dispatch({type: PROFILE_FETCHED, data: result.body}))
            .catch(err => dispatch({type: PROFILE_FAILED, err}))
    }
}

export function getOwnProfile() {
    return (dispatch) => {
        dispatch({type: PROFILE_FETCHING})

        return request.get(`http://localhost:8080/jea-kwetter-1.0/api/profiles/`)
            .set('Content-Type', 'application/json')
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => dispatch({type: PROFILE_FETCHED, data: result.body}))
            .catch(err => dispatch({type: PROFILE_FAILED, err}))
    }
}
