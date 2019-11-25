import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    // Centers text on page
    <Container>
        {props.children}
    </Container>
)