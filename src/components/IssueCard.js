import React from 'react';
import './IssueCard.css';
import IssueReactions from './IssueReactions';
import { marked } from 'marked';
import 'highlight.js/styles/github.css';

class IssueCard extends React.Component {

    componentDidMount() {
        marked.setOptions({
            highlight: function (code, lang) {
                const hljs = require('highlight.js');
                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                return hljs.highlight(code, { language }).value;
            },
            langPrefix: 'hljs language-',
            gfm: true,
            breaks: true,
            smartypants: true
        })
    }

    getIssueNumber = (issueUrl) => {
        const regEx = /[^/]+(?=\/$|$)/g;
        const issueNum = regEx.exec(issueUrl)
        return issueNum[0]
    }

    getRepoName = (html_url) => {
        const url = new URL(html_url)
        const repo = url.pathname.split('/')
        return repo[2]
    }

    getRepoURL = (html_url) => {
        const url = new URL(html_url)
        const repo = url.pathname.split('/')
        const repoURL = `${url.protocol}${url.host}/${repo[1]}/${repo[2]}`
        return repoURL
    }
    parseDate = (date) => {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
            hour: 'numeric'
        }
        const formatDate = new Date(date)
        return formatDate.toLocaleString('en-US', options)
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
                        <a className='extra content' href={this.getRepoURL(html_url)} rel="noreferrer" target="_blank" style={{ textAlign: 'right' }}>
                            {this.getRepoName(html_url)}</a>
                        <div className="content" style={{ marginRight: '3.5rem' }}>
                            <a className="author" href={user.html_url} rel="noreferrer" target="_blank">{user.login}</a>
                            <div className="ui metadata">
                                <div className="date">{this.parseDate(created_at)}</div>
                            </div>
                            <div className="text Issue-Text" dangerouslySetInnerHTML={{ __html: marked(body) }}>
                            </div>
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
                                <div className="content">
                                    <div className="ui comments">
                                        <div className="comment" style={{ textAlign: 'right' }}>
                                            <div className="metadata" >
                                                <IssueReactions reactions={reactions} />
                                            </div>
                                        </div>
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