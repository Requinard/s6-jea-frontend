import React from 'react'
import PropTypes from 'prop-types';
import {Paper} from "material-ui";

const KweetItem = (props) => (
    <Paper zDepth={1} rounded>
        <div style={{padding: '20px'}}>
            {props.kweet.message}
        </div>
    </Paper>
);

KweetItem.propTypes = {
    kweet: PropTypes.shape({
        message: PropTypes.string
    })
};

export default KweetItem
