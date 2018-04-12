import React from "react"
import PropTypes from 'prop-types';
import {Avatar, Chip} from "material-ui";
import {hashHistory} from 'react-router';
import "./profile.css"

export const ProfileName = (props) => (
    <Chip onClick={() => hashHistory.push(`/profile/${props.screenname}`)}><Avatar src={props.icon}/>{props.screenname}</Chip>
);

ProfileName.propType = {
    screenname: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
