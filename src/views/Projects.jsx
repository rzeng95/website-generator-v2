import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Project from './Project';
import TargetLink from './TargetLink';

const propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  main: {
    // height: '100px',
    // background: '#373737',
  },
  linkContainer: {
    display: 'flex',
    margin: '5px 0px',
  },
  listItem: {
    marginTop: '10px',
  },
  image: {
    maxWidth: '900px',
  },
};

const Home = ({ classes }) => {
  const websiteContent = (
    <div>
      <p className={ classes.text }>
        This website was created using React via&nbsp;
        <TargetLink
          link="https://github.com/facebookincubator/create-react-app"
          displayName="create-react-app"
        />. A production build was then minified
        and uploaded to Github Pages.
      </p>
      <p className={ classes.listItem }>* React, React-Router</p>
      <p className={ classes.listItem }>* React-JSS</p>
      <div className={ classes.linkContainer }>
        <TargetLink
          link="https://github.com/rzeng95/website-generator-v2"
          displayName="Github"
        />
      </div>
    </div>
  );

  const lolcarryContent = (
    <div>
      <p>
        A React/Redux fullstack web app that returns current-game information for League of Legends players.
        Uses the Riot Games API to serve meaningful information about player ranking and statistics.
      </p>
      <p className={ classes.listItem }>* React, Redux front end</p>
      <p className={ classes.listItem }>* Express backend with Redis</p>
      <div className={ classes.linkContainer }>
        <TargetLink
          link="https://github.com/rzeng95/lolcarry"
          displayName="Github"
        />
      </div>
      <img alt="" src={ `${process.env.PUBLIC_URL}/lolcarry.png` } className={ classes.image } />
    </div>
  );
  return (
    <div className={ classes.main }>
      <Project
        title="This website!"
        date="Jul 2017 - Present"
        content={ websiteContent }
      />

      <Project
        title="LoLCarry - Real-time League of Legends match info"
        date="Aug 2016 - Oct 2016"
        content={ lolcarryContent }
      />
    </div>
  );
};

Home.propTypes = propTypes;

export default injectSheet(styles)(Home);
