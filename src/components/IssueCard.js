import React from 'react';
import IssueReactions from './IssueReactions';

class IssueCard extends React.Component {

    getIssueNumber = (issueUrl) => {
        const regEx = /[^/]+(?=\/$|$)/g;
        const issueNum = regEx.exec(issueUrl)
        return issueNum[0]
    }

    parseDate = (data) => {
        const humanDate = data.split("T")
        return `${humanDate[0]}, ${humanDate[1]}`
    }

    render() {
        const { user, html_url, issue_url, body, created_at, reactions } = this.props.issue;

        return (
            <div className="ui raised padded text container segment">
                <div className="ui comments" >
                    <div className="comment">
                        <a href={user.html_url} className="avatar">
                            <img className="ui avatar image" alt='' src={user.avatar_url} />
                        </a>
                        <div className="content">
                            <a className="author" href={user.html_url} rel="noreferrer" target="_blank">{user.login}</a>
                            <div className="metadata">
                                <div className="date">{this.parseDate(created_at)}</div>
                            </div>
                            <p className="text Issue-Text">
                                {body}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ui clearing divider">
                    <div className="ui">
                        <div className="ui two column very relaxed grid">
                            <div className="column">
                                <div className="ui comments">
                                    <div className="comment">
                                        <div className="content">
                                            <div className="metadata">
                                                <div className="rating">
                                                    <a href={html_url} rel="noreferrer" target="_blank">{`Issue #${this.getIssueNumber(issue_url)}`}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <IssueReactions reactions={reactions} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IssueCard;