import React from 'react'
import { Card } from "react-bootstrap";
import './Footer.css';

const Footer = (props) => {

    return (
        <Card className="footerFrame text-center border-0">
            <Card.Footer style={{ color: "white", fontSize: "small" }}>
                Made by <a className="footerLink" href="https://reactjs.org/">React</a>.
                Contact me via <a className="footerLink" href="mailto:xx.peter.tan@gmail.com">this address</a>
            </Card.Footer>
        </Card>
    )

};

export default Footer;