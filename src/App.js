import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import SideColumn from './components/SideColumn/SideColumn';
import About from './components/About/About';
import Posts from './components/Posts/Posts';
import Post from './containers/Post/Post';
import Footer from './components/Footer/Footer';

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

const BlOGGER_HEADLINES = 'BEng @ ZJU; MSCS @ USC; Incoming Software Engineer @ Riot Games';

const POSTS_META = [
  {
    key: 'what-could-possibly-benefit-a-research-team',
    title: 'What could possibly benefit a research team?',
    link: 'https://raw.githubusercontent.com/xiaxuantan/notes/master/thoughts/what-could-possibly-benefit-a-research-team.md',
    date: '2020-01-21',
  },
  {
    key: 'brief-introduction-to-KMP',
    title: 'Brief introduction to KMP',
    link: 'https://raw.githubusercontent.com/xiaxuantan/notes/master/algorithm/brief-introduction-to-KMP.md',
    date: '2019-07-25'
  }
];


function App() {
  return (
    <Container>
      <Navigation links={NAVIGATION_LINKS} />
      <Row>
        <Col xs={12} lg={2}>
          <SideColumn
            bloggerName={BLOGGER_NAME}
            bloggerHeadline={BlOGGER_HEADLINES}
            socialMedia={SOCIAL_MEDIA} />
        </Col>
        <Col style={{ minHeight: "80vh" }}>
          <Switch>
            <Route path="/posts">
              <Posts postsMeta={POSTS_META} />
            </Route>
            <Route path="/post/:key">
              <Post postsMeta={POSTS_META} />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
