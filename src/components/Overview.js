import React from 'react'
import {AppBar} from "material-ui";
import './overview.css'

export class Overview extends React.Component {
    render() {
        return (
            <div>
                <AppBar title="Kwetter"/>

                <div className="content-outer">
                    <div className="content-inner">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
