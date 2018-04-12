import React from 'react'
import PropTypes from 'prop-types'
import {Divider, IconButton, IconMenu, MenuItem} from "material-ui";
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {hashHistory} from 'react-router'
import {connect} from "react-redux";
import {logout} from "../actions/auth";

const NavbarRight = (props) => (
    <IconMenu
        width={150}
        iconButtonElement={<IconButton
            tooltip={props.username}
        ><MoreVertIcon/></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
    >
        <MenuItem primaryText={`Hello ${props.username}`} disabled/>
        <Divider/>
        <MenuItem primaryText="My Timeline" onClick={() => hashHistory.push("/")}/>
        <MenuItem primaryText="My Profile" onClick={() => hashHistory.push("/profile")}/>
        <MenuItem primaryText="Search" onClick={() => hashHistory.push("/search")}/>
        <Divider/>
        <MenuItem primaryText="Sign out" onClick={() => props.logout()}/>
    </IconMenu>
)

NavbarRight.propTypes = {
    username: PropTypes.string,
    logout: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {
        username: ownProps.username
    }
}

export default connect(mapStateToProps, {
    logout: logout
})(NavbarRight)
