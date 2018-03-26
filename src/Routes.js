import React from 'react'
import {IndexRoute, Route} from 'react-router'
import {Overview} from "./components/Overview";
import KweetListWrapped from "./components/kweets/KweetListWrapped";

export default (
    <Route path="/" components={Overview}>
        <IndexRoute component={KweetListWrapped} />
    </Route>
)
