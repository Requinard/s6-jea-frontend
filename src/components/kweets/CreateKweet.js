import React from 'react'
import PropTypes from 'prop-types'
import KweetForm from "./KweetForm";
import {connect} from "react-redux";
import {createKweet} from "../../actions/kweets";

class CreateKweet extends React.Component {
    constructor(props){
        super(props);

        this.save = (kweet) => this.props.createKweet(kweet)
            .then(console.log("success"))
            .catch(err => console.warn(err))
    }

    render() {
        return (<KweetForm onSubmit={this.save}/>)
    }
}

CreateKweet.propTypes = {
    createKweet: PropTypes.function
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {
    createKweet: createKweet
})(CreateKweet)
