import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import MenuHeader from '../menuHeader.js'
import SignUpForm from './signUpForm';

class SignUp extends Component {
    render() {
        return (
            <div>
                <MenuHeader />
                <Grid centered columns={1}>
                    <Grid.Column computer={4} largeScreen={6} mobile={12}>
                        <SignUpForm />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default SignUp;
