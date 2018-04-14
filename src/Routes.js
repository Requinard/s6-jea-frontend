import React from 'react'
import {IndexRedirect, Route} from 'react-router'
import Overview from "./components/Overview";
import ProfileWrapped from "./components/profile/OwnProfileWrapped";
import LatestKweets from "./components/LatestKweets";
import Login from "./components/auth/Login";
import PersonProfileWrapped from "./components/profile/PersonProfileWrapped";
import SearchKweets from "./components/kweets/SearchKweets";
import Register from "./components/auth/Register";

export default (
    <div>
        <Route path="/" components={Overview}>
            <IndexRedirect to="/login"/>
            <Route path="/home" component={LatestKweets}/>
            <Route path="/profile" component={ProfileWrapped}/>
            <Route path="/profile/:screenname" component={PersonProfileWrapped}/>
            <Route path="/search" component={SearchKweets}/>
            <Route path="/search/:query" component={SearchKweets}/>
            <Route path="/login" component={Login}></Route>
        </Route>
        <Route path="/register" component={Register}/>
    </div>
)
