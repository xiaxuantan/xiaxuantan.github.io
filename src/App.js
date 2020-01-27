import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import SideColumn from './components/SideColumn/SideColumn';
import About from './components/About/About';

const SOCIAL_MEDIA = {
  Linkedin: 'https://www.linkedin.com/in/xiaxuan-tan',
  Weibo: 'https://www.weibo.com/peterxuan',
  Github: 'https://www.github.com/xiaxuantan'
}

const NAVIGATION_LINKS = {
  Posts: '/posts',
  // Publications: '/publications',
  Projects: '/projects',
  Biography: '/biography'
}

function App() {
  return (
    <Container>
      <Navigation links={NAVIGATION_LINKS} />
      <Row>
        <SideColumn />
        <About />
      </Row>
      <Footer socialMedia={SOCIAL_MEDIA} />
    </Container >
  );
}

export default App;
