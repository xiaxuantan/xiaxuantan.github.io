import React from 'react'
import { Navbar, Nav } from "react-bootstrap";

const Navigation = (props) => {
    const navLinks = Object.keys(props.links).map(key =>
        <Nav.Link href={props.links[key]} key={key}>{key}</Nav.Link>
    )
    return (
        <Navbar bg="dark" variant="dark" >
            <Navbar.Brand href="/">About</Navbar.Brand>
            <Nav className="mr-auto">
                {/* <Nav.Link href="/posts">Posts</Nav.Link>
                <Nav.Link href="/publications">Publications</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/biography">Biography</Nav.Link> */}
                {navLinks}
            </Nav>
        </Navbar >
    );
};

export default Navigation