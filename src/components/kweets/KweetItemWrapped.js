import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import KweetItem from "./KweetItem";
import {likeKweet} from "../../actions/kweets";

class KweetItemWrapped extends React.Component {
    render() {
        return (
            <div>
                <KweetItem kweet={this.props.kweets.find(it => it.id === this.props.kweetId)} likeKweet={this.props.likeKweet}/>
            </div>
        )
    }
}

KweetItemWrapped.propTypes = {
    kweetId: PropTypes.string.isRequired,
    kweets: PropTypes.array,
    likeKweet: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {
        kweetId: ownProps.kweetId,
        kweets: state.kweets.kweets
    }
}

export default connect(mapStateToProps, {
    likeKweet: likeKweet
})(KweetItemWrapped)
