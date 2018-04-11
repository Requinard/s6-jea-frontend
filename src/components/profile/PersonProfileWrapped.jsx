import React from 'react'
import PropTypes from 'prop-types'
import {Profile} from "./Profile";
import {CircularProgress} from "material-ui";
import {connect} from "react-redux";
import {getProfile} from "../../actions/profiles";

class PersonProfileWrapped extends React.Component {
    componentDidMount() {
        this.props.getOwnProfile(this.props.routeParams.screenname)
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <CircularProgress/> : <Profile profile={this.props.profile}/>}
            </div>
        )
    }
}

PersonProfileWrapped.propTypes = {
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
    getOwnProfile: getProfile
})(PersonProfileWrapped)
