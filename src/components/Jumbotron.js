import React, { PureComponent } from 'react';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginLeft: '1rem',

    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: '-6rem',
    },
  },
  subTitle: {
    margin: '1rem 0 0 3rem',
    maxWidth: '55%',
  },
});

class Jumbotron extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h1">DEV // ENTHUSIAST</Typography>
        <Typography className={classes.subTitle} variant="h5">
        I'm a Frontend Developer passionate about
        creating readable, portable and maintainable code,
        specializing in React.js
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
