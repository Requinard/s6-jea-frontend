import React from 'react'
import PropTypes from 'prop-types';
import {Divider, Paper} from "material-ui";
import FavoriteIcon from 'material-ui/svg-icons/action/favorite'

const KweetItem = (props) => (
    <Paper zDepth={1} rounded style={{
        margin: "10px"
    }}>
        {console.log(props.kweet)}
        <div style={{padding: '20px'}}>
            <p><b>@{props.kweet.profile.screenname}</b></p>
            <p>{props.kweet.message}</p>
            <Divider/>
            <div><FavoriteIcon onClick={() => props.likeKweet(props.kweet)}/> by <b>{props.kweet.likes.map(it => it.screenname)}</b></div>
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
    }),
    likeKweet: PropTypes.func
};

export default KweetItem
