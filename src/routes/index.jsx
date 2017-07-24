import React, { Component } from 'react';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import App from '../views/App';
import Resume from '../views/Resume';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={ App } />
          <Route path="/resume" component={ Resume } />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
