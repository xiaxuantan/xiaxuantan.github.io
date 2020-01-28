import React from 'react';
import { Col, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin, faWeibo } from '@fortawesome/free-brands-svg-icons'

import './SideColumn.css';


const SOCIAL_MEDIA_MAPPING = {
  Github: faGithub,
  Weibo: faWeibo,
  Linkedin: faLinkedin
}


const sideColumn = (props) => {

  const socialMedia = Object.keys(props.socialMedia).map(key =>
    (
      <div key={key} className="bloggerLink">
        <a href={props.socialMedia[key]}>
          <FontAwesomeIcon icon={SOCIAL_MEDIA_MAPPING[key]} />
          {' ' + key}
        </a>
      </div>
    )
  );

  return (
    <div className="sideColumn">
      <div className="avatarFrame">
        <Image src="avatar.jpg" roundedCircle className="avatar" />
      </div>
      <div className="bloggerName">
        {props.bloggerName}
      </div>
      <div className="bloggerHeadline">
        {props.bloggerHeadline}
      </div>
      <div className="bloggerLinks">
        {socialMedia}
      </div>
    </div>
  )
}

export default sideColumn;