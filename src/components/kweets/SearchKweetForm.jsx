import React from 'react'
import {Paper, RaisedButton} from "material-ui";
import {Field, reduxForm} from "redux-form";
import {TextField} from 'redux-form-material-ui'

const SearchKweetForm = (props) => (
    <div>
        <h1>Search</h1>
        <form onSubmit={props.handleSubmit}>
            <Paper style={{padding: "5px"}}>
                <Field
                    component={TextField}
                    type="text"
                    name="query"
                    floatingLabelText="Search for something!"
                    hintText="Floating white elephants"
                />
                <RaisedButton
                    label="Submit"
                    type="submit"
                    primary
                />
            </Paper>
        </form>
    </div>
);

export default reduxForm({
    form: "searchKweets"
})(SearchKweetForm)
