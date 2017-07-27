import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

const styles = {
  link: {
    textDecoration: 'none',
    color: '#459cde',
    fontSize: '18px',
  },
};

const TargetLink = ({ classes, link, displayName }) => (
  <a href={ link } target="_blank" rel="noopener noreferrer" className={ classes.link }>
    { displayName }
  </a>
);

TargetLink.propTypes = propTypes;

export default injectSheet(styles)(TargetLink);
