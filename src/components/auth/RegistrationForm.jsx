import React from 'react'
import {Field, reduxForm} from "redux-form";
import {TextField} from 'redux-form-material-ui'
import {Paper, RaisedButton} from "material-ui";
import './login.css'

const RegistrationForm = (props) => (
    <div className="login-container">
        <form onSubmit={props.handleSubmit} className="login-form">
            <Paper className="login-inner">
                {props.failed ? <p>It seems your username is taken! Try another!</p>: <div />}
                <h1>Register for kwetter!</h1>
                <Field
                    component={TextField}
                    type="text"
                    name="username"
                    floatingLabelText="Username"
                    hint="Kris Kraslot"
                    required
                    fullWidth/>
                <Field
                    component={TextField}
                    name="password"
                    type="text"
                    floatingLabelText="Password"
                    hint="Make it really secure!"
                    required
                    fullWidth
                />
                <RaisedButton
                    label="Register!"
                    type="submit"
                    primary
                />
            </Paper>
        </form>
    </div>
);

export default reduxForm({
    form: "registration"
})(RegistrationForm)
