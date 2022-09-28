import React from 'react';
import './IssueCard.css';
import IssueReactions from './IssueReactions';

class IssueCard extends React.Component {

    getIssueNumber = (issueUrl) => {
        const regEx = /[^/]+(?=\/$|$)/g;
        const issueNum = regEx.exec(issueUrl)
        return issueNum[0]
    }

    getRepoURL = (html_url) => {
        const url = new URL(html_url)
        return url.pathname
    }

    parseDate = (date) => {
        const formatDate = new Date(date)
        return formatDate.toLocaleString()
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
                            <div className="ui metadata">
                                <div className="date">{this.parseDate(created_at)}</div>
                                <a className='ui' href={html_url} rel="noreferrer" target="_blank">
                                    {this.getRepoURL(html_url)}</a>
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