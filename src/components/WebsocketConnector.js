import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {addKweetFromSocket} from "../actions/kweets";

export class WebsocketConnector extends React.Component {
    componentDidMount() {
        this.socket = new WebSocket(`ws://localhost:8080/jea-kwetter-1.0/api/sockets/kweets?token=${localStorage.getItem("token")}`)
        this.socket.onopen = (event) => {
            console.log(event)
        };
        this.socket.onclose = (event) => {
            console.log(event)
        }
        this.socket.onmessage = (event) => {
            let msg = JSON.parse(event.data)
            this.props.addKweetFromSocket(msg)
        }
    }

    render() {
        return this.props.children
    }
}

WebsocketConnector.propTypes = {
    addKweetFromSocket: PropTypes.func
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps, {
    addKweetFromSocket: addKweetFromSocket
})(WebsocketConnector)
