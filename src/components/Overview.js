import React from 'react'
import PropTypes from 'prop-types';
import {AppBar, Dialog, FloatingActionButton} from "material-ui";
import {hashHistory} from 'react-router'
import './overview.css'
import NavBarRight from "./NavBarRight";
import {connect} from "react-redux";
import Login from "./auth/Login";
import CreateKweet from "./kweets/CreateKweet";
import {ContentAdd} from "material-ui/svg-icons/index";
import {Snackbar} from "react-redux-snackbar";

export class Overview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalOpen: false
        }

        this.setModal = bool => this.setState({modalOpen: bool})
        this.openModal = () => this.setModal(true);
        this.closeModal = () => this.setModal(false);
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Kwetter"
                    onTitleClick={() => hashHistory.push("/")}
                    iconElementRight={<NavBarRight username={this.props.username}/>}
                    iconElementLeft={<div/>}
                />

                <div className="content-outer">
                    <div className="content-inner">
                        {this.props.isLoggedIn ? this.props.children : <Login/>}
                    </div>
                </div>

                <FloatingActionButton
                    onClick={() => this.openModal()}
                    className="fab"
                    secondary
                >
                    <ContentAdd />
                </FloatingActionButton>

                <Dialog
                    open={this.state.modalOpen}
                    onRequestClose={this.closeModal}
                >
                    <CreateKweet/>
                </Dialog>
                <Snackbar />
            </div>
        )
    }
}

Overview.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        username: state.auth.username
    }
}

export default connect(mapStateToProps, {})(Overview)
