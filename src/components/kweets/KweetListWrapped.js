import React from 'react'
import PropTypes from 'prop-types'
import KweetList from "./KweetList";
import {connect} from "react-redux";

class KweetListWrapped extends React.Component {
    render() {
        return (
            <KweetList kweets={this.props.kweets}/>
        )
    }
}

KweetListWrapped.propTypes = {
    kweets: PropTypes.array
};

function mapStateOfProps(state) {
    return {
        kweets: state.kweets.kweets
    }
}

export default connect(mapStateOfProps, {})(KweetListWrapped)
