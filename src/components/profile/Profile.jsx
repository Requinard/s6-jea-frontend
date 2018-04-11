import React from 'react';
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import './profile.css'
import {FlatButton, Paper} from "material-ui";
import KweetList from "../kweets/KweetList";

export class Profile extends React.Component {
    render() {
        return (
            <div className="profile-grid">
                <div className="profile-left">
                    <Paper>
                        <h1>@{this.props.profile.screenname}</h1>
                        <pre>{this.props.profile.bio}</pre>
                        <FlatButton
                            label={this.props.profile.website}
                            onClick={() => document.location.href = this.props.profile.website}
                            fullWidth
                        />
                        <p><FontAwesome name="rocket"/> {this.props.profile.location}</p>

                    </Paper>
                </div>
                <div className="profile-right">
                    <KweetList kweets={this.props.profile.kweets}/>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    profile: PropTypes.shape({
        screenname: PropTypes.string,
        bio: PropTypes.string,
        website: PropTypes.string,
        location: PropTypes.string,
        kweets: PropTypes.array
    }).isRequired
}

