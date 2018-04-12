import React from 'react'
import PropTypes from 'prop-types';
import {Divider, IconButton, Paper} from "material-ui";
import FavoriteIcon from 'material-ui/svg-icons/action/favorite'
import {ProfileName} from "../profile/ProfileName";
import "./kweets.css"

const KweetItem = (props) => (
    <Paper zDepth={1} rounded className="kweet-outer">
        <div style={{padding: '20px'}}>
            <p><b>@{props.kweet.profile.screenname}</b></p>
            <p>{props.kweet.message}</p>
            <Divider/>
            <div className="kweet-likes">
                <IconButton
                    primary
                    tooltip={this.likeKweet === undefined ? "Favorited by" : "Favorite this tweet!"}
                    onClick={() => this.likeKweet !== undefined ? props.likeKweet(props.kweet) : null}
                >
                    <FavoriteIcon/>
                </IconButton>
                {props.kweet.likes.map(it => <ProfileName screenname={it.screenname}/>)}
            </div>
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
