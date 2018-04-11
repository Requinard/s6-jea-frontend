import {combineReducers} from 'redux'
import {profiles} from "./profiles";
import {kweets} from "./kweets";

export default combineReducers({
    kweets,
    profiles
})
