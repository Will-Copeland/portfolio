import React from 'react';
import {
  withStyles, AppBar, Toolbar, Typography,
} from '@material-ui/core';


const styles = theme => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'space-around',

    },
  },
  logoName: {
    display: 'flex',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  link: {
    margin: '0 1rem 0 1rem',
  },
});

const Header = ({ classes }) => (
  <AppBar className={classes.root}>
    <Toolbar className={classes.toolBar}>
      <div className={classes.logoName}>
        <Typography variant="h6">
            Will Copeland
        </Typography>
      </div>
      <div className={classes.links}>
        <Typography variant="h6" className={classes.link}>
            Contact
        </Typography>
      </div>
    </Toolbar>
  </AppBar>
);


export default withStyles(styles)(Header);
