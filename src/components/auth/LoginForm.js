import React from 'react'
import {Field, reduxForm} from "redux-form";
import {TextField} from 'redux-form-material-ui'
import {hashHistory} from 'react-router'
import "./login.css"
import {Paper, RaisedButton} from "material-ui";

const LoginForm = (props) => (
    <div className="login-container">
        <form onSubmit={props.handleSubmit} className="login-form">
            <Paper className="login-inner">
                <h2>Login</h2>
                <Field
                    component={TextField}
                    floatingLabelText="Username"
                    name="username"
                    fullWidth
                />
                <Field
                    component={TextField}
                    type="password"
                    floatingLabelText="Password"
                    name="password"
                    errorText={props.isFailed ? "Are you sure this is correct?" : null}
                    fullWidth
                />
                <RaisedButton
                    label="Login"
                    type="submit"
                    disabled={props.isFetching}
                    primary
                />
                <RaisedButton
                    label="Register"
                    onClick={() => hashHistory.push("/register")}
                    secondary
                />
            </Paper>
        </form>
    </div>
);

export default reduxForm({
    form: 'login'
})(LoginForm)
