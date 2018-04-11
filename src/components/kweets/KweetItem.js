import React from 'react'
import PropTypes from 'prop-types';
import {Divider, Paper} from "material-ui";

const KweetItem = (props) => (
    <Paper zDepth={1} rounded style={{
        margin: "10px"
    }}>
        <div style={{padding: '20px'}}>
            <p><b>@{props.kweet.profile.screenname}</b></p>
            <p>{props.kweet.message}</p>
            <Divider/>
            <p><i>Posted on: {Date(props.kweet)}</i></p>
        </div>
    </Paper>
);

KweetItem.propTypes = {
    kweet: PropTypes.shape({
        message: PropTypes.string,
        created: PropTypes.number,
        profile: PropTypes.shape({
            screenname: PropTypes.string
        })
    })
};

export default KweetItem
