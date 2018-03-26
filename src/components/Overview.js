import React from 'react'
import {AppBar} from "material-ui";

export class Overview extends React.Component {
    render() {
        return (
            <div>
                <AppBar title="Kwetter"/>

                {this.props.children}
            </div>
        )
    }
}