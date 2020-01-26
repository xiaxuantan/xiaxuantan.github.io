import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/footer';
import Navigation from './components/Navigation/Navigation';

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
      <Footer socialMedia={SOCIAL_MEDIA} />
    </Container>
  );
}

export default App;
