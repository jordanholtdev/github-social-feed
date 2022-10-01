import React from 'react';

class Loader extends React.Component {

    render() {
        return (
            <div className="ui raised padded text container segment">
                <div className="ui placeholder cented">
                    <div className="image header">
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="paragraph">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader;