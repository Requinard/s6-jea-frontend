import React from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";

class ProfileWrapped extends React.Component {
    render() {
        return (<Profile/>)
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {})(ProfileWrapped)
