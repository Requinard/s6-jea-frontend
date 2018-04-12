import React from 'react'
import PropTypes from 'prop-types';
import {Divider, IconButton, Paper, RaisedButton} from "material-ui";
import {ProfileName} from "../profile/ProfileName";
import "./kweets.css"

const KweetItem = (props) => (
    <Paper zDepth={1} rounded className="kweet-outer">
        <div style={{padding: '20px'}}>
            <p><b>@{props.kweet.profile.screenname}</b></p>
            <p>{props.kweet.message}</p>
            <Divider/>
            <div className="kweet-likes">
                <RaisedButton
                    label={props.likeKweet !== undefined ? "Favorite this tweet!" : "Favorited by"}
                    onClick={() => props.likeKweet !== undefined ? props.likeKweet(props.kweet) : null}
                    primary
                />
            </div>
            <div className="kweet-likes">
                {props.kweet.likes.map(it => <ProfileName screenname={it.screenname} icon={it.icon}/>)}
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
