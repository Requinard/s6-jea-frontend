import React from 'react'
import PropTypes from 'prop-types';
import {Paper} from "material-ui";

const KweetItem = (props) => (
    <Paper>
        {props.kweet.message}
    </Paper>
);

KweetItem.propTypes = {
    kweet: PropTypes.shape({
        message: PropTypes.string
    })
};

export default KweetItem
