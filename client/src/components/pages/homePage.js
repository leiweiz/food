import React, { Component } from 'react';

import { Card, Icon, Image, Container} from 'semantic-ui-react'

class HomePage extends Component {
    render() {
        return (
            <Container textAlign="center">
            <Card>
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
        </Container>
        );
    }
}

export default HomePage;
