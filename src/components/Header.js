import React from 'react';

const Header = () => {
    return (
        <h2 className="ui icon header center aligned" style={{ padding: "12px", paddingTop: '60px' }}>
            <i className="github icon"></i>
            <div className="content">
                Github Social Feed
                <div className="sub header">Stay updated on the latest issues</div>
                <div className="sub header">Made with 💖 by <a href='https://github.com/jordanholtdev'>Jordan</a></div>
            </div>
        </h2>
    );
};

export default Header;