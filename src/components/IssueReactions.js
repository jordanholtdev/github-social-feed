import React from 'react';

class IssueReactions extends React.Component {

    render() {
        const reactions = this.props.reactions;
        return (
            <div className='ui mini horizontal divided list right floated'>
                {
                    Object.keys(reactions).map((key, i) => {
                        if (key !== 'url' && reactions[key] !== 0) {
                            return (
                                <div className='item' key={i}>
                                    <div className='content'>
                                        <div className="header">{key}</div>
                                        {reactions[key]}
                                    </div>
                                </div>
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        )
    }
}

export default IssueReactions