import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import SideColumn from './components/SideColumn/SideColumn';
import About from './components/About/About';

const SOCIAL_MEDIA = {
  Linkedin: 'https://www.linkedin.com/in/xiaxuan-tan',
  Github: 'https://www.github.com/xiaxuantan',
  Weibo: 'https://www.weibo.com/peterxuan'
};

const NAVIGATION_LINKS = {
  Posts: '/posts',
  // Publications: '/publications',
  Projects: '/projects',
  Biography: '/biography'
};

const BLOGGER_NAME = 'Xiaxuan Tan';

const BlOGGER_HEADLINES = 'BEng @ ZJU; MSCS @ USC';

function App() {
  return (
    <Container>
      <Navigation links={NAVIGATION_LINKS} />
      <Row>
        <SideColumn
          bloggerName={BLOGGER_NAME}
          bloggerHeadline={BlOGGER_HEADLINES}
          socialMedia={SOCIAL_MEDIA} />
        <About />
      </Row>
    </Container >
  );
}

export default App;
