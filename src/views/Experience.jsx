import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Project from './Project';

const propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  main: {
    // height: '100px',
    // background: '#373737',
  },
};

const Experience = ({ classes }) => {
  const honeyContent = (
    <div>
      placeholder
    </div>
  );

  const artigenContent = (
    <div>
      placeholder
    </div>
  );

  const riotContent = (
    <div>
      placeholder
    </div>
  );

  return (
    <div className={ classes.main }>
      <Project
        title="Honey - Software Engineer"
        date="Jan 2017 - Present"
        content={ honeyContent }
      />
      <Project
        title="Artigen - Software Engineer Intern"
        date="Jan 2016 - Jun 2016"
        content={ artigenContent }
      />
      <Project
        title="Riot Games - QA Tech Analyst Intern"
        date="Jun 2014 - Sep 2014"
        content={ riotContent }
      />
    </div>
  );
};

Experience.propTypes = propTypes;

export default injectSheet(styles)(Experience);
