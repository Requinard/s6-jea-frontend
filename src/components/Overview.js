import React from 'react'
import PropTypes from 'prop-types';
import {AppBar} from "material-ui";
import './overview.css'
import NavBarRight from "./NavBarRight";
import {connect} from "react-redux";
import Login from "./login/Login";

export class Overview extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Kwetter"
                    iconElementRight={<NavBarRight/>}
                    iconElementLeft={<div/>}
                />

                <div className="content-outer">
                    <div className="content-inner">
                        {this.props.isLoggedIn ? this.props.children  : <Login />}
                    </div>
                </div>
            </div>
        )
    }
}

Overview.propTypes = {
    isLoggedIn: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, {})(Overview)
