import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import SideColumn from './components/SideColumn/SideColumn';
import About from './components/About/About';
import Posts from './containers/Posts/Posts';

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

const POSTS_META = [
  {
    title: 'What could possibly benefit a research team?',
    link: 'https://raw.githubusercontent.com/xiaxuantan/notes/master/thoughts/what-could-possibly-benefit-a-research-team.md',
    date: '2020-01-21',
  }
];


function App() {
  return (
    <Container>
      <Navigation links={NAVIGATION_LINKS} />
      <Row>
        <Col xs={2} className="sideColumn">
          <SideColumn
            bloggerName={BLOGGER_NAME}
            bloggerHeadline={BlOGGER_HEADLINES}
            socialMedia={SOCIAL_MEDIA} />
        </Col>
        <Col>
          <Switch>
            <Route path="/posts">
              <Posts postsMeta={POSTS_META} />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;