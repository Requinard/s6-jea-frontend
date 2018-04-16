import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {snackbarReducer} from 'react-redux-snackbar'
import {profiles} from "./profiles";
import {kweets} from "./kweets";
import {auth} from "./auth";

export default combineReducers({
    kweets,
    profiles,
    auth,
    snackbar: snackbarReducer,
    form: formReducer
})
