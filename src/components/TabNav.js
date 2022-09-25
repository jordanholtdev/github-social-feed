import React from 'react';

class TabNav extends React.Component {

    render() {
        return (
            <div>
                <h2 class="ui header">
                    <i class="bug icon"></i>
                    <div class="content">
                        Issues
                    </div>
                </h2>
                <div class="ui four item menu">
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab === this.props.selected ? 'active' : '');

                            return (
                                <button className={"ui button item " + active} key={tab} onClick={() => this.props.setSelected(tab)}>{tab}</button>
                            )
                        })
                    }
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default TabNav;