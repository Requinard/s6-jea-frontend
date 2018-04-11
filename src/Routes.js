import React from 'react'
import {IndexRoute, Route} from 'react-router'
import {Overview} from "./components/Overview";
import ProfileWrapped from "./components/profile/ProfileWrapped";
import {LatestKweets} from "./components/LatestKweets";

export default (
    <Route path="/" components={Overview}>
        <IndexRoute component={LatestKweets}/>
        <Route path="/profile" component={ProfileWrapped}/>
    </Route>
)
