import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MenuHeader from './menu';
import LandingPage from './landingPage';
import SignIn from './auth/signin';
import SignUp from './auth/signup';
import SignOut from './auth/signout';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <MenuHeader />
                    <Switch>
                        <Route path="/signin" component={SignIn} />
                        <Route path="/signout" component={SignOut} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
