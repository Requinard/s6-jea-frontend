import React from "react"
import PropTypes from 'prop-types';
import {Avatar, Chip} from "material-ui";
import {hashHistory} from 'react-router';
import "./profile.css"

export const ProfileName = (props) => (
    <Chip onClick={() => hashHistory.push(`/profile/${props.profile.screenname}`)}><Avatar src={props.profile.icon}/>{props.profile.screenname}</Chip>
);

ProfileName.propType = {
    profile: PropTypes.shape({
        screenname: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    })
};
