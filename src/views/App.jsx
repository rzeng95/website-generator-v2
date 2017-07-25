import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Header from './Header';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';

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
      <Route exact path="/" component={ About } />
      <Route exact path="/experience" component={ Experience } />
      <Route exact path="/projects" component={ Projects } />
      <Route exact path="/resume" component={ Resume } />
    </div>
  </div>

);

App.propTypes = propTypes;

export default injectSheet(styles)(App);
