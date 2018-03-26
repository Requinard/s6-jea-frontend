import React from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import KweetItem from "./KweetItem";

class KweetItemWrapped extends React.Component {
    render() {
        return (
            <div>
                <KweetItem kweet={this.props.kweets.find(it => it.id === this.props.kweetId)}/>
            </div>
        )
    }
}

KweetItemWrapped.propTypes = {
    kweetId: PropTypes.string.isRequired,
    kweets: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        kweetId: ownProps.kweetId,
        kweets: state.kweets.kweets
    }
}

export default connect(mapStateToProps, {})(KweetItemWrapped)
