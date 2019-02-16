import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  withStyles, AppBar, Toolbar, IconButton, Typography,
} from '@material-ui/core';
// import ArrowBack from '@material-ui/icons/ArrowBack';
import Name from './Name';
import Logo from './Logo';


const styles = theme => ({
  root: {
    zIndex: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.7) !important',
  },
  toolbar: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between',
    },
  },
  nav: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '3rem',
    },
  },
  title: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem 0 1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 0.5rem 0 0.5rem',

    },

  },
  hidden: {
    opacity: 0,
  },
});

class Header extends React.PureComponent {


  render() {
    const { classes, atTop, notOnIndex } = this.props;

    return (
      <div>
        <AppBar className={classes.root} position="fixed">
          <Name notOnIndex={notOnIndex} atTop={atTop} />

          <Toolbar className={classes.toolbar}>
            <div className={classes.logo}>
              <Logo />

            </div>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" /> */}
            <div className={classes.nav}>
              {/* <Typography variant="h4" color="inherit" className={classes.grow}>
          <Link
            to="/"
            className={classes.title}
          >
            {siteTitle}
          </Link>
        </Typography> */}

              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link
                  to="/"
                  className={classes.title}
                >
          Home
                </Link>
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link
                  to="/work"
                  className={classes.title}
                >
          Work
                </Link>
              </Typography>

              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link
                  to="/"
                  className={classes.title}
                >
          Contact
                </Link>
              </Typography>
            </div>
            {/* <div className={classes.hidden}>
          <Logo />
        </div> */}
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default withStyles(styles)(Header);
