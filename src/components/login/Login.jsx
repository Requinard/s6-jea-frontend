import React from 'react'
import LoginForm from "./LoginForm";
import {connect} from "react-redux";

class Login extends React.Component {
    render() {
        return (
            <LoginForm/>
        )
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {})(Login)
