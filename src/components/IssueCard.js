import React from 'react';

class IssueCard extends React.Component {

    render() {
        const { user, html_url, body, created_at } = this.props.issue;

        return (
            <div class="ui raised container segment">
                <div class="ui internally celled grid">
                    <div class="row">
                        <div class="three wide column">
                            <img class="ui avatar image" alt='' src={user.avatar_url} />
                        </div>
                        <div class="thirteen wide column">
                            <h4 class="ui header"><a class="item" href={html_url} rel="noreferrer" target="_blank">{html_url}</a></h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="three wide column">
                            <p>{created_at}</p>
                        </div>
                        <div class="ten wide column">
                            <p>{body}</p>
                        </div>
                        <div class="three wide column">
                            <a class="item" href={user.html_url} rel="noreferrer" target="_blank">{user.login}</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default IssueCard;