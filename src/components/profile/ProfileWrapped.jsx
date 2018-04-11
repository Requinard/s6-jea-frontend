import React from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import PropTypes from 'prop-types';

class ProfileWrapped extends React.Component {
    render() {
        return (<Profile profile={this.props.profile}/>)
    }
}

ProfileWrapped.propTypes = {
    profile: PropTypes.shape({})
};

function mapStateToProps(state) {
    return {
        profile: state.profiles.profile
    }
}

export default connect(mapStateToProps, {})(ProfileWrapped)
