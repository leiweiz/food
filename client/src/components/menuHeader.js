import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import * as actions from '../actions/auth_actions';
import { connect } from 'react-redux';

function UnAuthMenuBar(props) {
    return (
        <Menu.Menu position='right'>
            <Menu.Item
                name='signin'
                active={props.activeItem === 'signin'}
                onClick={props.handleItemClick}>
                Sign In
            </Menu.Item>

            <Menu.Item
                name='signup'
                active={props.activeItem === 'signup'}
                onClick={props.handleItemClick}>
                Sign Up
            </Menu.Item>
        </Menu.Menu>
    );
}

function AuthMenuBar(props) {
    return (
        <Menu.Menu position='right'>
            <Menu.Item
                name='signout'
                active={props.activeItem === 'signout'}
                onClick={props.handleItemClick}>
                Sign Out
            </Menu.Item>
        </Menu.Menu>
    );
}

class MenuHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: ''
        }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick(e, {name}) {
        this.setState({ activeItem: name });
        this.props.history.push(`/${name}`);
    }

    render() {
        //TODO: update activeItem
        const {activeItem} = this.state;
        const menubar = (this.props.authenticated ?
            <AuthMenuBar
                activeItem={activeItem}
                handleItemClick={this.handleItemClick}
            /> :
            <UnAuthMenuBar
                activeItem={activeItem}
                handleItemClick={this.handleItemClick}
            />);

        return (
            <Menu>
                {menubar}
            </Menu>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(MenuHeader);
