import React from 'react'
import {Field, reduxForm} from "redux-form";
import {TextField,} from 'redux-form-material-ui';
import {RaisedButton} from "material-ui";

const EditProfileForm = props => (
    <form onSubmit={props.handleSubmit}>
        <h3>Update your profile</h3>
        <Field
            component={TextField}
            floatingLabelText="Bio"
            name="bio"
            fullWidth
        />
        <Field
            component={TextField}
            floatingLabelText="Website"
            name="website"
            fullWidth
        />
        <Field
            component={TextField}
            floatingLabelText="Location"
            name="location"
            fullWidth
        />
        <RaisedButton
            label="Update"
            type="Submit"
            primary
        />
    </form>
);

export default reduxForm({
    form: 'editProfile'
})(EditProfileForm)
