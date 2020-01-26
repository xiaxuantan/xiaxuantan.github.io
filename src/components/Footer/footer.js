import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faGithub, faLinkedin, faWeibo } from '@fortawesome/free-brands-svg-icons'
import { Card, Nav } from "react-bootstrap";


library.add(faGithub, faLinkedin, faWeibo);


const SOCIAL_MEDIA_MAPPING = {
    Github: faGithub,
    Weibo: faWeibo,
    Linkedin: faLinkedin
}

const Footer = (props) => {

    const socialMedia = Object.keys(props.socialMedia).map(key =>
        (
            <Nav.Item key={key}>
                <Nav.Link href={props.socialMedia[key]}>
                    <FontAwesomeIcon icon={SOCIAL_MEDIA_MAPPING[key]} size="lg" />
                </Nav.Link>
            </Nav.Item>
        )
    );

    return (
        <Card className="text-center border-0">
            <Card.Body>
                <Card.Text>
                    Copyright &#169; 2019 Xiaxuan Tan
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Nav className="justify-content-center" activeKey="/home">
                    {socialMedia}
                </Nav>
            </Card.Footer>
        </Card>
    )

};

export default Footer