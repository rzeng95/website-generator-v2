import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { NavLink } from 'react-router-dom';

const propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '120px',
    background: '#373737',
  },
  name: {
    fontSize: '45px',
    fontWeight: '600',
    color: 'white',
  },
  navGroup: {
    display: 'flex',
    justifyContent: 'center',
    // background: '#abb8ce',
    // background: 'linear-gradient(to bottom, #85898c, #F2F3F4)',
  },
  nav: {
    height: '50px',
    display: 'flex',
    alignSelf: 'center',
    // border: '1px dotted green',
    position: 'relative',
    overflow: 'hidden',
    margin: '0px 3px',
  },
  underline: {
    position: 'absolute',
    top: '45px',
    borderBottom: '2px solid #373737',
    width: '100%',
    transform: 'scaleX(0)',
    transition: '0.2s',
  },
  underlineLeft: {
    extend: 'underline',
    transform: 'scaleX(1)',
    right: '100%',
  },
  underlineRight: {
    extend: 'underline',
    transform: 'scaleX(1)',
    left: '100%',
  },
  link: {
    margin: '10px 0px',
    width: '110px',
    textDecoration: 'none',
    fontSize: '20px',
    textAlign: 'center',
    color: '#459cde',
  },
  activeLink: {
    color: '#373737',
    fontWeight: '800',
    '& ~ $underline': {
      transform: 'scaleX(1)',
    },
    '& ~ $underlineLeft': {
      right: '0%',
    },
    '& ~ $underlineRight': {
      left: '0%',
    },
  },
};

const Header = ({ classes }) => (
  <div>
    <div className={ classes.header }>
      <h1 className={ classes.name }>
        Roland Zeng
      </h1>
    </div>
    <div className={ classes.navGroup }>
      <div className={ classes.nav }>
        <NavLink exact to="/" className={ classes.link } activeClassName={ classes.activeLink }>
          About
        </NavLink>
        <div className={ classes.underlineLeft } />
      </div>

      <div className={ classes.nav }>
        <NavLink exact to="/experience" className={ classes.link } activeClassName={ classes.activeLink }>
          Experience
        </NavLink>
        <div className={ classes.underline } />
      </div>

      <div className={ classes.nav }>
        <NavLink exact to="/projects" className={ classes.link } activeClassName={ classes.activeLink }>
          Projects
        </NavLink>
        <div className={ classes.underlineRight } />
      </div>
    </div>
  </div>
);

Header.propTypes = propTypes;

export default injectSheet(styles)(Header);
