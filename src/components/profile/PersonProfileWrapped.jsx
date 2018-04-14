import React from 'react'
import PropTypes from 'prop-types'
import {Profile} from "./Profile";
import {CircularProgress} from "material-ui";
import {connect} from "react-redux";
import {followProfile, getProfile} from "../../actions/profiles";

class PersonProfileWrapped extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.routeParams.screenname)
    }

    componentDidUpdate(prevProps) {
        let oldScreenname = prevProps.routeParams.screenname;
        let newScreenname = this.props.routeParams.screenname || undefined;
        if (newScreenname !== oldScreenname) this.props.getProfile(newScreenname);

    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <CircularProgress/> : <Profile
                    profile={this.props.profile}
                    followProfile={this.props.followProfile}
                    isOwnProfile={false}
                />}
            </div>
        )
    }
}

PersonProfileWrapped.propTypes = {
    profile: PropTypes.shape({}),
    isFetching: PropTypes.bool,
    getProfile: PropTypes.func,
    followProfile: PropTypes.func
};

function mapStateToProps(state) {
    return {
        profile: state.profiles.profile,
        isFetching: state.profiles.isFetching
    }
}

export default connect(mapStateToProps, {
    getProfile: getProfile,
    followProfile: followProfile
})(PersonProfileWrapped)
