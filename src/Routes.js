import React from 'react'
import {IndexRedirect, Route} from 'react-router'
import {Overview} from "./components/Overview";
import ProfileWrapped from "./components/profile/ProfileWrapped";
import {LatestKweets} from "./components/LatestKweets";
import Login from "./components/login/Login";

export default (
    <Route path="/" components={Overview}>
        <IndexRedirect to="/login"/>
        <Route path="/home" component={LatestKweets} />
        <Route path="/profile" component={ProfileWrapped}/>
        <Route path="/login" component={Login}/>
    </Route>
)
