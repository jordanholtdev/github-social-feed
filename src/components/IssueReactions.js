import React from 'react';

class IssueReactions extends React.Component {

    render() {
        const reactions = this.props.reactions;
        return (
            <div className='ui mini horizontal divided list right floated'>
                {
                    Object.keys(reactions).map((key, i) => {
                        if (key !== 'url' && key !== 'total_count' && reactions[key] !== 0) {
                            if (key === '+1') return <div className='rating' key={i} >👍 {reactions[key]}</div>;
                            if (key === '-1') return <div className='rating' key={i} >👎 {reactions[key]}</div>;
                            if (key === 'laugh') return <div className='rating' key={i}>😂 {reactions[key]}</div>;
                            if (key === 'heart') return <div className='rating' key={i}>😍 {reactions[key]}</div>;
                            if (key === 'hooray') return <div className='rating' key={i}>🎉 {reactions[key]}</div>;
                            if (key === 'eyes') return <div className='rating' key={i}>👀 {reactions[key]}</div>;
                            if (key === 'confused') return <div className='rating' key={i}>🤔 {reactions[key]}</div>;
                            if (key === 'rocket') return <div className='rating' key={i}>🚀 {reactions[key]}</div>;
                        } else {
                            return null;
                        }
                        return null
                    })
                }
            </div>
        )
    }
}

export default IssueReactions