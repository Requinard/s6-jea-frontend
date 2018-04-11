import React from 'react'
import PropTypes from 'prop-types'
import {FlatButton} from "material-ui";
import {hashHistory} from 'react-router'
import {connect} from "react-redux";
import {logout} from "../actions/auth";

const NavbarRight = (props) => (
    <div>
        <FlatButton label="Home" onClick={() => hashHistory.push("/")}/>
        <FlatButton label="Profile" onClick={() => hashHistory.push("/profile")}/>
        <FlatButton label="Logout" onClick={() => props.logout()}/>
    </div>
)

NavbarRight.propTypes = {
    logout: PropTypes.func
};

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {
    logout: logout
})(NavbarRight)
