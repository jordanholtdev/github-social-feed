import React from 'react';

class Sidebar extends React.Component {

    render() {
        return (
            <div>
                <h2 class="ui header">
                    Repos
                </h2>
                <div class="ui vertical basic buttons">
                    <button class="ui button">facebook/react</button>
                    <button class="ui button">vercel/next.js</button>
                    <button class="ui button">aws/aws-cli</button>
                    <button class="ui button">torvalds/linux</button>
                </div>
            </div>
        )
    }
}

export default Sidebar;