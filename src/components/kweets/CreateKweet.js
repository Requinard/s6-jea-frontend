import React from 'react'
import KweetForm from "./KweetForm";
import {connect} from "react-redux";

class CreateKweet extends React.Component {
    render() {
        return(<KweetForm onSubmit={item => console.log(item    )}/>)
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {})(CreateKweet)
