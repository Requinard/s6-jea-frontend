import React from 'react'
import PropTypes from 'prop-types'
import {Profile} from "./Profile";
import {CircularProgress} from "material-ui";
import {connect} from "react-redux";
import {getOwnProfile} from "../../actions/profiles";

class OwnProfileWrapped extends React.Component {
    componentDidMount() {
        this.props.getOwnProfile()
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <CircularProgress/> : <Profile profile={this.props.profile} isOwnProfile={true}/>}
            </div>
        )
    }
}

OwnProfileWrapped.propTypes = {
    profile: PropTypes.shape({}),
    isFetching: PropTypes.bool,
    getOwnProfile: PropTypes.func
};

function mapStateToProps(state) {
    return {
        profile: state.profiles.profile,
        isFetching: state.profiles.isFetching
    }
}

export default connect(mapStateToProps, {
    getOwnProfile: getOwnProfile
})(OwnProfileWrapped)
