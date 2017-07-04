import React, { Component } from 'react';
import * as actions from '../../actions/auth_actions';
import { connect } from 'react-redux';

import UnAuthMenuBar from './unAuthMenuBar';
import AuthMenuBar from './authMenuBar';

class MenuHeader extends Component {
    render() {
        const menubar = (this.props.authenticated ?
            <AuthMenuBar
                history={this.props.history}
            /> :
            <UnAuthMenuBar
                history={this.props.history}
            />);

        return (menubar);
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(MenuHeader);
