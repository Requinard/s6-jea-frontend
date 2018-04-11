import React from 'react'
import {Field, reduxForm} from "redux-form";
import {TextField} from 'redux-form-material-ui'
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
                    fullWidth
                />
                <Field
                    component={TextField}
                    type="password"
                    floatingLabelText="Password"
                    fullWidth
                />
                <RaisedButton
                    label="Login"
                    type="submit"
                    primary
                />
            </Paper>
        </form>
    </div>
);

export default reduxForm({
    form: 'login'
})(LoginForm)
