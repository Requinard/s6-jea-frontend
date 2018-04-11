import React from 'react';
import './profile.css'
import {Paper} from "material-ui";
import KweetList from "../kweets/KweetList";

export class Profile extends React.Component {
    render() {
        return (
            <div className="profile-grid">
                <div className="profile-left">
                    <Paper>
                        <h1>USERNAME</h1>
                    </Paper>
                </div>
                <div className="profile-right">
                    <KweetList kweets={[]}/>
                </div>
            </div>
        )
    }
}

