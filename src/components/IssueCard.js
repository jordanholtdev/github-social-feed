import React from 'react';

class IssueCard extends React.Component {


    getIssueNumber = (issueUrl) => {
        const regEx = /[^/]+(?=\/$|$)/g;
        const issueNum = regEx.exec(issueUrl)
        return issueNum[0]
    }

    render() {
        const { user, html_url, body, created_at, issue_url } = this.props.issue;

        return (
            <div className="ui raised padded text container segment">
                <div div className="ui comments" >
                    <div className="comment">
                        <a href={user.html_url} className="avatar">
                            <img className="ui avatar image" alt='' src={user.avatar_url} />
                        </a>
                        <div className="content">
                            <a className="author" href={user.html_url} rel="noreferrer" target="_blank">{user.login}</a>
                            <div className="metadata">
                                <div className="date">{created_at}</div>
                                <div className="rating">
                                    <i className="star icon"></i>
                                    5 Faves
                                </div>
                            </div>
                            <p className="text Issue-Text">
                                {body}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ui clearing divider">
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
            </div>
        )
    }
}

export default IssueCard;