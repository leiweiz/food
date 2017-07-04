import React, { Component } from 'react';


import MenuHeader from './menu';
import LandingPage from './landingPage';

class App extends Component {
    render() {
        return (
            <div>
                <MenuHeader />
                <LandingPage />
            </div>
        );
    }
}

export default App;
