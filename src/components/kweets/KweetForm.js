import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {TextField} from 'redux-form-material-ui'
import {Paper, RaisedButton} from "material-ui";

const KweetForm = (props) => (
    <Paper style={{padding: '5px'}}>
        <form onSubmit={props.handleSubmit}>
            <Field
                component={TextField}
                hintText="What's on your mind?"
                floatingLabelText="Write a new kweet"
                type="text"
                fullWidth
                rows={5}
            />
            <RaisedButton
                label="Submit"
                primary
            />
        </form>
    </Paper>
);

export default reduxForm({
    form: "kweetForm"
})(KweetForm)

