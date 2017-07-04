import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import MenuHeader from '../menuHeader.js';
import SignInForm from './signInForm';

class SignIn extends Component {
    render() {
        return (
            <div>
                <MenuHeader />
                <Grid centered columns={1}>
                    <Grid.Column computer={4} largeScreen={6} mobile={12}>
                        <SignInForm />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default SignIn;
