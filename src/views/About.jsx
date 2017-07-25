import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  headerContainer: {
    marginBottom: '20px',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px 0px',
  },
  headerText: {
    fontSize: '20px',
  },
  text: {
    lineHeight: '25px',
  },
};

const About = ({ classes }) => (
  <div>
    <div className={ classes.headerContainer }>
      <h3 className={ classes.headerText }>
        Hello! My name is Roland and I&apos;m a full-stack web developer.
      </h3>
    </div>
    <div className={ classes.subheaderContainer }>
      <p className={ classes.text }>
        Growing up in Minnesota, I moved to California to study Computer Science at UCLA.
        I live in Los Angeles now, and currently work at Honey as a full-stack software engineer.
      </p>
    </div>
    <div className={ classes.infoContainer }>
      <div>
        Resume
      </div>
      <div>
        Github
      </div>
      <div>
        LinkedIn
      </div>
    </div>
    <div className={ classes.contentContainer }>
      <p className={ classes.text }>
        Web applications are my passion. I love both back end and front end: I enjoy the challenges of implementing API endpoints
        for RESTful back ends as well as creating functional and cool-looking user interfaces.
        Javascript is my strongest language - it was my gateway into the world of web development,
        and I&apos;ve stuck with it since.
        Please feel free to check out my projects!
      </p>
    </div>
  </div>
);

About.propTypes = propTypes;

export default injectSheet(styles)(About);
