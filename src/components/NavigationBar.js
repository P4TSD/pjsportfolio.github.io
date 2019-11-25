import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #F0F8FF;
    }

    .navbar-brand {
        color: #000000;
        font-size: xx-large;
        font-family: Georgia;
        }
    } 
    
    .navbar-nav .nav-link {
        color: #778899;

        &:hover {
            color: #FF8C00;
        }
    } 
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Patrick J. Sales</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/experience">Experience</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)