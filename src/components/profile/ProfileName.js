import React from "react"
import PropTypes from 'prop-types';
import {Chip} from "material-ui";
import {hashHistory} from 'react-router';
import "./profile.css"

export const ProfileName = (props) => (
    <Chip onClick={() => hashHistory.push(`/profile/${props.screenname}`)}>{props.screenname}</Chip>
);

ProfileName.propType = {
    screenname: PropTypes.string.isRequired
};
