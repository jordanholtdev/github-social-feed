import React from 'react';
import IssueCard from './IssueCard';

const IssueList = (props) => {
    const issues = props.issues.map((issue) => {
        return <IssueCard key={issue.id} issue={issue} />
    })
    return <div>{issues}</div>
}

export default IssueList;