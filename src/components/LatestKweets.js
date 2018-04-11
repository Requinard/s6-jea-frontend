import React from 'react'
import CreateKweet from "./kweets/CreateKweet";
import KweetListWrapped from "./kweets/KweetListWrapped";

export class LatestKweets extends React.Component {
    render(){
        return(
            <div>
                <CreateKweet />
                <KweetListWrapped />
            </div>
        )
    }
}
