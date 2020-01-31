import React from 'react'
import { Card } from "react-bootstrap";

const Footer = (props) => {

    return (
        <Card className="text-center border-0">
            <Card.Footer style={{ color: "grey", fontSize: "small" }}>
                Made by <a href="https://reactjs.org/">React</a>.
                Contact me via <a href="mailto:xx.peter.tan@gmail.com">this address</a>
            </Card.Footer>
        </Card>
    )

};

export default Footer;