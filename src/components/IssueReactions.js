import React from 'react';

class IssueReactions extends React.Component {

    render() {
        const reactions = this.props.reactions
        const upvote = reactions["+1"]
        const downvote = reactions["-1"]

        return (
            <div className="ui comments">
                <div className="comment">
                    <div className="content">
                        <div className="metadata">
                            <p>{upvote} 👍</p>
                            <p>{downvote} 👎</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IssueReactions