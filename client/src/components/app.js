import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './landingPage';
import MenuHeader from './menuHeader';
import SignIn from './auth/signin';
import SignUp from './auth/signup';
import SignOut from './auth/signout';
import Account from './account';

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
                        <Route path="/account" component={Account} />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
