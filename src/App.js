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
  Projects: '/projects',
  Biography: '/biography'
};

const BLOGGER_NAME = 'Xiaxuan Tan';

const BlOGGER_HEADLINES = 'Still trying to come up with cool phrases to highlight myself';

const BG_IMG = 'bird.jpg';

const SHORT_BIO = `
# Short Bio

***

Hi, I am Xiaxuan Tan, a master student at University of Southern California. I received my bachelor degree from Zhejiang University. Previously I had an internship at [Tencent](https://www.tencent.com/) and worked for a start-up company [Kolmostar](https://www.kolmostar.com/). This summer, I am fortunate to be an software engineer intern at [Riot Games](https://www.riotgames.com/).

Just like most of software engineers, I think critically, work assiduously and embrace all kinds of new technologies enthusiastically. I believe software can make lives better. My interests lie in back-end development, DevOps, and big data.

In my personal life, I am a big fan of sports. Hopefully this year I have more time to play in the flesh instead of watching games on television (especially skiing).
`

const POSTS_META = [
  {
    key: 'run-hadoop-locally-on-mac-os.md',
    title: 'Run Hadoop locally on Mac OS',
    link: 'https://raw.githubusercontent.com/xiaxuantan/notes/master/tutorials/run-hadoop-locally-on-mac-os.md',
    date: '2020-03-09'
  },
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
  },
];


function App() {
  return (
    <div>
      <Navigation links={NAVIGATION_LINKS} />
      <Container>
        <Row>
          <Col xs={12} lg={2}>
            <SideColumn
              bloggerName={BLOGGER_NAME}
              bloggerHeadline={BlOGGER_HEADLINES}
              socialMedia={SOCIAL_MEDIA} />
          </Col>
          <Col lg={10} style={{ minHeight: "calc(100vh - 100px)" }}>
            <Switch>
              <Route path="/posts">
                <Posts postsMeta={POSTS_META} />
              </Route>
              <Route path="/post/:key">
                <Post postsMeta={POSTS_META} />
              </Route>
              <Route path="/">
                <About bgImg={BG_IMG} shortBio={SHORT_BIO} />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
