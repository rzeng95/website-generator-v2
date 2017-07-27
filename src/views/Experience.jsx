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
  listItem: {
    marginTop: '10px',
  },
};

const Experience = ({ classes }) => {
  const honeyContent = (
    <div>
      <p>
        At Honey, I work on a feature team; we are constantly pushing out new products and features.
        My responsiblities switch between front and back end. The tech stack here is all Javascript;
        ES6 React for the front end and Node.js for the backend.  Here are some projects I&apos;ve worked on:
      </p>
      <p className={ classes.listItem }>
        * Exclusives - A system for circulating Honey Gold (redeemable virtual currency) to new and existing users via sharing or signups.
      </p>
      <p className={ classes.listItem }>
        * Payouts - A redeem system to allow users to redeem their Honey Gold for various merchants&apos; gift cards.
      </p>
    </div>
  );

  const artigenContent = (
    <div>
      <p>
        Artigen was a VR startup that I part-time interned for during my senior year at UCLA.
        Their goal was to develop VR Home, a service created using Unreal Engine 4 where potential
        homebuyers could take virtual tours of real estate properties. I had recently taken
        a VR elective course, and it was very enjoyable applying my knowledge to contribute to the product.
      </p>
      <p className={ classes.listItem }>
        * Improved user experience by designing a feature that enables users to select from
        a variety of preconfigured furniture and home layouts instead of having to configure individual settings.
      </p>
      <p className={ classes.listItem }>
        * Implemented voice command detection by integrating VR Home with Sphinx speech recognition software.
      </p>
    </div>
  );

  const riotContent = (
    <div>
      <p>
        During my summer internship at Riot, I worked on QA Tools & Automation, a small team focused
        on building and maintaining an automated testing framework that was responsible for verifying
        new builds to the game. In my free time, I participated in champion design playtest and feedback sessions.
      </p>
      <p className={ classes.listItem }>
        * Developed a C# GUI that substantially enhanced testing efficiency by allowing
        non-engineer testers to run automated tests on local changes before submitting them to common code.
      </p>
      <p className={ classes.listItem}>
        * Increased test coverage by designing and maintaining Python test scripts for
        an internal testing framework that verified every build from the CI pipeline.
      </p>
      <p className={ classes.listItem}>
        * Integrated with a champion development team (Rek&apos;Sai) to write automated tests.
        Worked with game designers and other QA analysts to replace manual tests with Python scripts, thus reducing
        the chance of human error.
      </p>
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
