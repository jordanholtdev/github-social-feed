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
            <div class="ui raised padded text container segment">
                <div div class="ui comments" >
                    <div class="comment">
                        <a href={user.html_url} class="avatar">
                            <img class="ui avatar image" alt='' src={user.avatar_url} />
                        </a>
                        <div class="content">
                            <a class="author" href={user.html_url} rel="noreferrer" target="_blank">{user.login}</a>
                            <div class="metadata">
                                <div class="date">{created_at}</div>
                                <div class="rating">
                                    <i class="star icon"></i>
                                    5 Faves
                                </div>
                            </div>
                            <div class="text">
                                {body}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui clearing divider">
                    <div class="ui comments">
                        <div class="comment">
                            <div class="content">
                                <div class="metadata">
                                    <div class="rating">
                                        <a href={html_url} rel="noreferrer" target="_blank">{`Issue Number:${this.getIssueNumber(issue_url)}`}</a>
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