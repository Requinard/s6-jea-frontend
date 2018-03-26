import React from 'react';
import PropTypes from 'prop-types';
import KweetItem from "./KweetItem";

const KweetList = (props) => (
    <div>
        {props.kweets.map(kweet => <KweetItem kweet={kweet}/>)}
    </div>
);

KweetList.propTypes = {
    kweets: PropTypes.array
};

export default KweetList
