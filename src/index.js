import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  Auth,
  Links
} from './lib';
import {
  Container,
  Nav
} from './components';
import Home from './containers/Home';
import Admin from './containers/Admin';

import './index.css';

let state = {
  activeLink: 0
};

const dispatch = ({ state }) => {
  return {
    setActive(link) {
      state.activeLink = link;
    }
  }
}

const AppRouter = () => (
  <Router>
    <div>
      <Nav active={state.activeLink} links={Links} dispatch={dispatch} /> 
      <input ref={e => { this.email = e.target.value; }} type="text" name="">
      <button onClick={() => Auth.signIn(this.email, '')}>Sign In</button>

      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} /> 
      </Container>
    </div>
  </Router>
);

ReactDOM.render(AppRouter(), document.getElementById('root'));
