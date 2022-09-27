import React from 'react';

class IssueReactions extends React.Component {

    render() {
        const reactions = this.props.reactions
        const { laugh, hooray, confused, rocket, eyes } = this.props.reactions
        const upvote = reactions["+1"]
        const downvote = reactions["-1"]

        return (
            <div className="ui comments">
                <div className="comment">
                    <div className="content">
                        <div className="metadata">
                            <p>{upvote} 👍</p>
                            <p>{downvote} 👎</p>
                            <p>{laugh} 😂</p>
                            <p>{hooray} 🎉</p>
                            <p>{confused} 😕</p>
                            <p>{rocket} 🚀</p>
                            <p>{eyes} 👀</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IssueReactions