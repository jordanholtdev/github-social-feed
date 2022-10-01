import React from 'react';

class Loader extends React.Component {

    render() {
        return (
            <div className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui massive text loader">Loading</div>
                </div>
                <p></p>
            </div>
        )
    }
}

export default Loader;