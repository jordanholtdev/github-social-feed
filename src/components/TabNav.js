import React from 'react';

class TabNav extends React.Component {

    render() {
        return (
            <div>
                <div class="ui four item menu">
                    {
                        this.props.tabs.map(tab => {
                            const active = (tab === this.props.selected ? 'active' : '');

                            return (
                                <button className={"ui basic button " + active} key={tab} onClick={() => this.props.setSelected(tab)}>{tab}</button>
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