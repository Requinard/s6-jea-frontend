import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {profiles} from "./profiles";
import {kweets} from "./kweets";
import {auth} from "./auth";

export default combineReducers({
    kweets,
    profiles,
    auth,
    form: formReducer
})
