import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const navLinks = Object.keys(props.links).map(key =>
        <Nav.Link as={Link} to={props.links[key]} key={key}>{key}</Nav.Link>
    )
    return (
        <Navbar bg="dark" variant="dark" expand="sm">
            <Navbar.Brand href="/">About</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {navLinks}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Navigation;