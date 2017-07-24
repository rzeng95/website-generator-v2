import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  main: {
    // height: '100px',
    // background: '#373737',
  },
};

const Home = ({ classes }) => (
  <div className={ classes.main }>
    exp
  </div>
);

Home.propTypes = propTypes;

export default injectSheet(styles)(Home);
