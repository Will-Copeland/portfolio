import { Link } from 'gatsby';
import React from 'react';
import {
  withStyles, AppBar, Toolbar, Typography,
} from '@material-ui/core';
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
    const {
      classes, atTop, notOnIndex, handleInternalNav,
    } = this.props;

    return (
      <div>
        <AppBar className={classes.root} position="fixed">
          <Name notOnIndex={notOnIndex} atTop={atTop} />

          <Toolbar className={classes.toolbar}>
            <div className={classes.logo}>
              <Logo />
            </div>

            <div className={classes.nav}>
              <Typography
                // if callback is on <Link /> it sets state as null
                // Scroll to page 0 when on index
                onClick={notOnIndex === undefined ? () => handleInternalNav(0) : null}
                variant="h6"
                color="inherit"
                className={classes.grow}
              >
                <Link
                  to="/"
                  // navigate to index & scroll to 0
                  state={{ scrollTo: 0 }}
                  className={classes.title}
                >
          Home
                </Link>
              </Typography>
              <Typography
               // Scroll to page 0 when on index
              //  if callback is on <Link /> it sets state as null
                onClick={notOnIndex === undefined ? () => handleInternalNav(2) : null}
                variant="h6"
                color="inherit"
                className={classes.grow}
              >
                <Link
                  to="/"
                  // navigate to index & scroll to 2

                  state={{ scrollTo: 2 }}
                  className={classes.title}
                   // Scroll to page 2 when on index
                  // onClick={() => handleInternalNav(2)}
                >
          Work
                </Link>
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.grow}>

          Contact
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </div>

    );
  }
}


export default withStyles(styles)(Header);
