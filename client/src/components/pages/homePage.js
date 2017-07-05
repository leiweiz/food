import React, { Component } from 'react';

import { Card, Icon, Image, Grid } from 'semantic-ui-react'

class HomePage extends Component {
    render() {
        return (
            <Grid centered columns={1}>
                <Grid.Column mobile={15} tablet={8} computer={6}>
                    <Card fluid centered raised>
                        <Image src='/images/test2.jpg' />
                        <Card.Content>
                            <Card.Header>
                                Matthew
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>
                                    Joined in 2015
                                </span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>

                    <Card fluid centered raised>
                        <Image src='/images/test1.jpg' />
                        <Card.Content>
                            <Card.Header>
                                Matthew
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>
                                    Joined in 2015
                                </span>
                            </Card.Meta>
                            <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user' />
                                22 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        );
    }
}

export default HomePage;
