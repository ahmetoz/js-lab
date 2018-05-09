import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>
      Home
    </h2>
  </div>
)

const Topic = ({ match }) => console.log(match) || (
  <h2>{match.params.topicId}</h2>
)

const Topics = ({ match }) => (
  <div>
    <h2>
      Topics
    </h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={`${match.url}`} component={() => (
        <h2>Select a topic!</h2>
      )} />
  </div>
)
const About = () => (
  <div>
    <h2>
      About
    </h2>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
