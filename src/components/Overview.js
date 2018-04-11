import React from 'react'
import {AppBar} from "material-ui";
import './overview.css'
import NavBarRight from "./NavBarRight";

export class Overview extends React.Component {
    render() {
        return (
            <div>
                <AppBar title="Kwetter"
                iconElementRight={<NavBarRight />}/>

                <div className="content-outer">
                    <div className="content-inner">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
