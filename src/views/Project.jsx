import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

const styles = {
  main: {
    marginBottom: '30px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
  },
  date: {
    fontSize: '18px',
    fontStyle: 'italic',
  },
};

const Project = ({ classes, title, date, content }) => (
  <div className={ classes.main }>
    <div className={ classes.header }>
      <div className={ classes.title }>
        { title }
      </div>
      <div className={ classes.date }>
        { date }
      </div>
    </div>

    <div className={ classes.content }>
      { content }
    </div>
  </div>
);

Project.propTypes = propTypes;

export default injectSheet(styles)(Project);
