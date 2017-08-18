import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  Auth,
  Links
} from './lib';
import store from './store';
import {
  Container,
  Nav
} from './components';
import Home from './containers/Home';
import Admin from './containers/Admin';

import './index.css';

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Nav links={Links} /> 

        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} /> 
        </Container>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(AppRouter(), document.getElementById('root'));
