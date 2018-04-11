import React from 'react'
import {IndexRoute, Route} from 'react-router'
import {Overview} from "./components/Overview";
import KweetListWrapped from "./components/kweets/KweetListWrapped";
import ProfileWrapped from "./components/profile/ProfileWrapped";

export default (
    <Route path="/" components={Overview}>
        <IndexRoute component={KweetListWrapped}/>
        <Route path="/profile" component={ProfileWrapped}/>
    </Route>
)
