import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {profiles} from "./profiles";
import {kweets} from "./kweets";

export default combineReducers({
    kweets,
    profiles,
    form: formReducer
})
