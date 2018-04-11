import React from 'react'
import PropTypes from 'prop-types'
import KweetList from "./KweetList";
import {connect} from "react-redux";
import {CircularProgress} from "material-ui";

class KweetListWrapped extends React.Component {
    render() {
        return (
            <div>
                {this.props.isFetching ? <CircularProgress/> :
                    <KweetList kweets={this.props.kweets} title="Latest Kweets"/>}
            </div>
        )
    }
}

KweetListWrapped.propTypes = {
    title: PropTypes.string,
    kweets: PropTypes.array,
    isFetching: PropTypes.bool
};

function mapStateOfProps(state, ownProps) {
    return {
        isWrapped: state.kweets.isFetching,
        kweets: state.kweets.kweets,
        title: ownProps.title
    }
}

export default connect(mapStateOfProps, {})(KweetListWrapped)
