import React from 'react';
import PropTypes from 'prop-types';
import KweetItem from "./KweetItem";
import KweetItemWrapped from "./KweetItemWrapped";

const KweetList = (props) => (
    <div>
        <h1>{props.title ? props.title : ""}</h1>
        {props.kweets.sort((a, b) => b.created - a.created)
            .map(kweet => props.noWrap ? <KweetItemWrapped kweetId={kweet.id}/> :
                <KweetItem kweet={kweet} key={kweet.id} likeKweet={() => {
                }}/>)}
    </div>
);

KweetList.propTypes = {
    kweets: PropTypes.array,
    title: PropTypes.string,
    noWrap: PropTypes.bool
};

export default KweetList
