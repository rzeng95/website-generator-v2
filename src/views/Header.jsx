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
  nav: {
    display: 'flex',
    justifyContent: 'center',
    height: '50px',
    // background: '#abb8ce',
    background: 'linear-gradient(to bottom, #85898c, #F2F3F4)',
  },
  link: {
    margin: '10px 0px',
    width: '110px',
    textDecoration: 'none',
    fontSize: '20px',
    textAlign: 'center',
    color: '#3779e5',
  },
  activeLink: {
    color: '#45597a',
    fontWeight: '800',
  },
};

const Header = ({ classes }) => (
  <div>
    <div className={ classes.header }>
      <h1 className={ classes.name }>
        Roland Zeng
      </h1>
    </div>
    <div className={ classes.nav }>
      <NavLink exact to="/" className={ classes.link } activeClassName={ classes.activeLink }>
        About
      </NavLink>

      <NavLink exact to="/experience" className={ classes.link } activeClassName={ classes.activeLink }>
        Experience
      </NavLink>

      <NavLink exact to="/projects" className={ classes.link } activeClassName={ classes.activeLink }>
        Projects
      </NavLink>
    </div>
  </div>
);

Header.propTypes = propTypes;

export default injectSheet(styles)(Header);
