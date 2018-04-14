import React from 'react'
import PropTypes from 'prop-types'
import EditProfileForm from "./EditProfileForm";
import {connect} from "react-redux";
import {updateProfile} from "../../actions/profiles";

class ChangeProfile extends React.Component {
    constructor(props){
        super(props)

        this.submit = profile => this.props.updateProfile(profile)
    }
    render() {
        return (<EditProfileForm initialValues={this.props.profile} onSubmit={this.submit}/>)
    }
}

ChangeProfile.propTypes = {
    profile: PropTypes.shape({}),
    updateProfile: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {
        profile: state.profiles.profile
    }
}

export default connect(mapStateToProps, {
    updateProfile: updateProfile
})(ChangeProfile)
