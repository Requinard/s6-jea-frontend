import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome'
import './profile.css'
import {Avatar, Paper, RaisedButton} from "material-ui";
import KweetList from "../kweets/KweetList";
import {ProfileName} from "./ProfileName";

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
                                <h2>Follows</h2>
                                <div className="profile-follow">
                                    {this.props.profile.follows.map(it => <ProfileName profile={it}/>)}
                                </div>
                                <h2>Followers</h2>
                                <div className="profile-follow">
                                    {this.props.profile.followers.map(it => <ProfileName profile={it}/>)}
                                </div>
                            </Paper>


                            <Paper>
                                {this.props.followProfile !== undefined ?
                                    <RaisedButton
                                        label={`Start following ${this.props.profile.screenname}`}
                                        onClick={() => this.props.followProfile(this.props.profile)}
                                        fullWidth
                                        primary
                                    />
                                    : null}
                            </Paper>
                        </div>
                        < div className="profile-right">
                            <KweetList kweets={this.props.profile.kweets}
                                       title={`${this.props.profile.screenname} kweets`}/>
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
    }).isRequired,
    followProfile: PropTypes.func
}

