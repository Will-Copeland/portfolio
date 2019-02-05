import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  withStyles, AppBar, Toolbar, Button, IconButton, Typography,
} from '@material-ui/core';
import Logo from './Logo';


const styles = {
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0) !important',
    // '@media (min-width: 960px)': {
    //   // width: '80vw',
    //   // margin: 'auto',
    //   justifyContent: 'center',
    // },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
  },
  title: {
    color: 'white',
    margin: '0 2rem 0 1rem',
    textDecoration: 'none',

  },
  hidden: {
    opacity: 0,
  },
};

const Header = ({ siteTitle, classes }) => (
  <div>
    <AppBar className={classes.root} position="fixed">

      <Toolbar className={classes.toolbar}>
        <div>
          <Logo />

        </div>
        {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" /> */}
        <div className={classes.nav}>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link
            to="#"
            className={classes.title}
          >
          About
          </Link>
        </Typography>
          <Typography variant="h4" color="inherit" className={classes.grow}>
          <Link
            to="/"
            className={classes.title}
          >
            {siteTitle}
          </Link>
        </Typography>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link
            to="#"
            className={classes.title}
          >
          Work
          </Link>
        </Typography>
        </div>
        <div className={classes.hidden}>
          <Logo />
        </div>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default withStyles(styles)(Header);
