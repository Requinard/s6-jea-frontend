import React from 'react';
import PropTypes from 'prop-types';
import KweetItem from "./KweetItem";
import KweetItemWrapped from "./KweetItemWrapped";

const KweetList = (props) => (
    <div>
        {props.kweets.map(kweet => <KweetItemWrapped kweetId={kweet.id} key={kweet.id}/>)}
    </div>
);

KweetList.propTypes = {
    kweets: PropTypes.array
};

export default KweetList
