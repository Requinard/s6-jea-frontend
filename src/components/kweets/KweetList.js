import React from 'react';
import PropTypes from 'prop-types';
import KweetItemWrapped from "./KweetItemWrapped";
import CreateKweet from "./CreateKweet";
import KweetItem from "./KweetItem";

const KweetList = (props) => (
    <div>
        <h1>{props.title ? props.title : ""}</h1>
        {props.kweets.map(kweet => <KweetItem kweet={kweet} />)}
    </div>
);

KweetList.propTypes = {
    kweets: PropTypes.array,
    title: PropTypes.string
};

export default KweetList
