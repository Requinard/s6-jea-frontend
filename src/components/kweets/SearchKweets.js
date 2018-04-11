import React from 'react'
import {Divider} from "material-ui";
import PropTypes from 'prop-types'
import {hashHistory} from 'react-router'
import KweetListWrapped from "./KweetListWrapped";
import SearchKweetForm from "./SearchKweetForm";
import {searchKweets} from "../../actions/kweets";
import {connect} from "react-redux";

export class SearchKweets extends React.Component {
    constructor(props) {
        super(props)

        this.update = result => {
            hashHistory.push(`/search/${result.query}`)
            this.props.searchKweets(result.query)
        }
    }

    componentDidMount() {
        if (this.props.routeParams.query !== undefined) {
            this.props.searchKweets(this.props.routeParams.query)
        }
    }

    render() {
        return (
            <div>
                <SearchKweetForm onSubmit={this.update} />
                <Divider />
                <KweetListWrapped title="Results" />
            </div>
        )
    }
}

SearchKweets.propTypes = {
    searchKweets: PropTypes.func
};

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {
    searchKweets: searchKweets
})(SearchKweets)
