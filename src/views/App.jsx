import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Header from './Header';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  main: {
    // background: '#F2F3F4',
    padding: '30px 50px',
    overflow: 'scroll',
    overflowX: 'hidden',
    height: 'calc(100vh - 230px)',
  },
};

const App = ({ classes }) => (
  <div>
    <Header />
    <div className={ classes.main }>
      <Switch>
        <Route exact path="/" component={ About } />
        <Route exact path="/experience" component={ Experience } />
        <Route exact path="/projects" component={ Projects } />
        <Redirect to={{ pathname: '/', state: { from: '*' } }} />
      </Switch>
    </div>
  </div>

);

App.propTypes = propTypes;

export default injectSheet(styles)(App);
