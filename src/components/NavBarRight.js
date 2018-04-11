import React from 'react'
import FontAwesome from 'react-fontawesome'
import {FlatButton} from "material-ui";
import {hashHistory} from 'react-router'

export default (props) => (
    <div>
        <FlatButton label="Home" onClick={() => hashHistory.push("/")} />
        <FlatButton label="Profile" onClick={() => hashHistory.push("/profile")}/>
    </div>
)
