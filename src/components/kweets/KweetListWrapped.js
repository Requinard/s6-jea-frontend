import React from 'react'
import PropTypes from 'prop-types'
import KweetList from "./KweetList";
import {connect} from "react-redux";

class KweetListWrapped extends React.Component {
    render() {
        return (
            <KweetList kweets={this.props.kweets} title="Latest Kweets"/>
        )
    }
}

KweetListWrapped.propTypes = {
    title: PropTypes.string,
    kweets: PropTypes.array
};

function mapStateOfProps(state, ownProps) {
    return {
        kweets: state.kweets.kweets,
        title: ownProps.title
    }
}

export default connect(mapStateOfProps, {})(KweetListWrapped)
