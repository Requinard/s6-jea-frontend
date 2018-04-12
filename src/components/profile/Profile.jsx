import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'
import './profile.css'
import {Avatar, Paper, RaisedButton} from "material-ui";
import KweetList from "../kweets/KweetList";
import CreateKweet from "../kweets/CreateKweet";

export class Profile extends React.Component {
    render() {
        return (
            <div>
                {this.props.profile != null ?
                    <div className="profile-grid">

                        <div className="profile-left">
                            <Paper>
                                <Avatar
                                    src={this.props.profile.icon}
                                    size={450}
                                />
                                <h1>@{this.props.profile.screenname}</h1>
                                <pre>{this.props.profile.bio}</pre>
                                <RaisedButton
                                    label={this.props.profile.website}
                                    onClick={() => document.location.href = this.props.profile.website}
                                    secondary
                                    fullWidth
                                />
                                <p><FontAwesome name="rocket"/> {this.props.profile.location}</p>

                            </Paper>

                            <Paper>
                                <p><b>Follows:</b> {this.props.profile.follows}</p>
                                <p><b>Followed by: </b> {this.props.profile.followers}</p>
                            </Paper>


                            <Paper>
                                <RaisedButton
                                    label={`Start following ${this.props.profile.screenname}`}
                                    fullWidth
                                    primary
                                />
                            </Paper>
                        </div>
                        < div className="profile-right">
                            < CreateKweet/>
                            <KweetList kweets={this.props.profile.kweets}/>
                        </div>
                    </div>
                    : <p>No profile availabe</p>}
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

