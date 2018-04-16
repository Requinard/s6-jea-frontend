import request from 'superagent-es6-promise'
import {showSnack} from 'react-redux-snackbar'

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
            .catch(err => {
                dispatch({type: PROFILE_FAILED, err})
                dispatch(showSnack("get_profile_failed", {
                    label: `Failed to retrieve profile for ${profileName}`,
                    timeout: 2000
                }))
            })
    }
}

export function getOwnProfile() {
    return (dispatch) => {
        dispatch({type: PROFILE_FETCHING})

        return request.get(`http://localhost:8080/jea-kwetter-1.0/api/profiles/`)
            .set('Content-Type', 'application/json')
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => dispatch({type: PROFILE_FETCHED, data: result.body}))
            .catch(err => {
                dispatch({type: PROFILE_FAILED, err})
                dispatch(showSnack("get_profile_failed", {
                    label: `Failed to retrieve your profile`,
                    timeout: 2000
                }))
            })
    }
}

export function followProfile(profile) {
    return (dispatch) => {
        let screenname = profile.screenname;

        dispatch({type: "PROFILE_FOLLOW_POSTING", profile, screenname});

        if (screenname === undefined) {
            let err = "No valid screenname found";
            dispatch({type: "PROFILE_FOLLOW_FAILED", err});
            dispatch(showSnack("profile_follow_failed", {
                label: "No screenname found to follow",
                timeout: 2000
            }));
            return Promise.reject(err)
        }

        return request.post(`http://localhost:8080/jea-kwetter-1.0/api/profiles/${screenname}`)
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .then(result => {
                dispatch({type: "PROFILE_FOLLOW_SUCCESS", data: result.body})
                dispatch({type: PROFILE_FETCHED, data: result.body})
                dispatch(showSnack('profile_follow', {
                    label:  `Succesfully follower ${screenname}`,
                    timeout: 1000
                }))
            })
            .catch(err => {
                dispatch({type: "PROFILE_FOLLOW_FAILED", err})
                dispatch(showSnack("profile_follow_failed", {
                    label: `Failed to follow ${screenname}`,
                    timeout: 2000
                }))
            })
    }
}

export function updateProfile(profile) {
    return (dispatch) => {
        dispatch({type: 'PROFILE_UPDATING', profile})

        return request.put("http://localhost:8080/jea-kwetter-1.0/api/profiles/")
            .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
            .send(profile)
            .then(result => {
                dispatch({type: 'PROFILE_UPDATED', data: result.body})
                dispatch({type: PROFILE_FETCHED, data: result.body})
                dispatch(showSnack("profile_update", {
                    label: "Profile was updated!",
                    timeout: 1000
                }))
            })
            .catch(err => {
                dispatch({type: "PROFILE_UPDATE_FAILED", err});
                dispatch(showSnack("profile_update_failed", {
                    label: "Failed to update profile",
                    timeout: 2000
                }))
            })
    }
}
