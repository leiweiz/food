import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/landingPage';
import AccountPage from './pages/accountPage';
import HomePage from './pages/homePage';
import ChatPage from './pages/chatPage';
import MenuHeader from './menu/menuHeader';
import SignIn from './auth/signin';
import SignUp from './auth/signup';
import SignOut from './auth/signout';

import requireAuth from './auth/require_auth';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={MenuHeader} />
                    <Switch>
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signout" component={SignOut} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/account" component={requireAuth(AccountPage)} />
                        <Route path="/home" component={requireAuth(HomePage)} />
                        <Route path="/chat" component={requireAuth(ChatPage)} />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
