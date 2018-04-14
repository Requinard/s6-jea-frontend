import React from 'react'
import request from 'superagent-es6-promise'
import {hashHistory} from 'react-router'
import './login.css'
import RegistrationForm from "./RegistrationForm";

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            failed: false
        }

        this.register = credentials => request.post("http://localhost:8080/jea-kwetter-1.0/api/users/")
            .send(credentials)
            .then(result => hashHistory.push("/login"))
            .catch(err => this.setState({failed: true}))
    }

    render() {
        return (<RegistrationForm onSubmit={it => this.register(it)} failed={this.state.failed}/>)
    }
}

export default Register
