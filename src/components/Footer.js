import React from 'react';

class Footer extends React.Component {

    render() {

        return (
            <div className='ui vertical footer segment' style={{ paddingTop: '50px' }}>
                <div className='ui center aligned container'>
                    <div className="ui doubling stackable">
                        <h4 className="ui header">Github Social Feed</h4>
                        <div className="ui link list">
                            <a className="item" href="https://jordanholt.dev" rel="noreferrer" target="_blank">Made with 💖 By Jordan</a>
                            <a className="item" href="https://github.com/jordanholtdev/github-social-feed" target="_blank" rel="noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                    <div className='ui horizontal small divided link list'>
                        Site design © 2022 Jordan Holt
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;