import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class MenuHeader extends Component {
    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick() {

    }

    render() {
        //TODO: update activeItem
        const activeItem = 'signup';

        return (
            <Menu>
                <Menu.Menu position='right'>
                    <Menu.Item name='signin' active={activeItem === 'signin'} onClick={this.handleItemClick}>
                        Sign In
                    </Menu.Item>

                    <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
                        Sign Up
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default MenuHeader;
