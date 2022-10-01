import React, { useEffect, useState } from 'react';
import IssueCard from './IssueCard';
import useInfiniteScroll from './useInfiniteScroll';
import Loader from './Loader';

const IssueList = (props) => {

    const [count, setCount] = useState(5)
    const [listIssues, setListIssues] = useState(props.issues)
    const [isBottom, setIsBottom] = useInfiniteScroll(addItems)

    useEffect(() => {
        setListIssues(props.issues);
    }, [props])

    function addItems() {
        setCount(count + 5)
        setIsBottom(false);
    };

    const issues = listIssues.slice(0, count).map((issue) => {
        return <IssueCard key={issue.id} issue={issue} />
    })
    return (
        <>
            <div>{issues}</div>
            {isBottom && <Loader />}
        </>
    )
}

export default IssueList;