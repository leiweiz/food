import React, { Component } from 'react';
import { Menu, Input, Dropdown, Icon } from 'semantic-ui-react';

class AuthMenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'home' };

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, {name}) {
        this.setState({ activeItem: name });
        this.props.history.push(`/${name}`);
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu fluid>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='chat'
                    active={activeItem === 'chat'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='account'
                    active={activeItem === 'account'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='signout'
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        );
    }
}

export default AuthMenuBar;
