import React from 'react'
import PropTypes from 'prop-types'
import CreateKweet from "./kweets/CreateKweet";
import KweetListWrapped from "./kweets/KweetListWrapped";
import {getTimeline} from "../actions/kweets";
import {connect} from "react-redux";

export class LatestKweets extends React.Component {
    componentDidMount(){
        this.props.getTimeline()
    }
    render() {
        return (
            <div>
                <CreateKweet/>
                <KweetListWrapped/>
            </div>
        )
    }
}

LatestKweets.propTypes = {
    getTimeline: PropTypes.func
};

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps, {
    getTimeline: getTimeline
})(LatestKweets)
