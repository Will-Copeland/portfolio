import React, { PureComponent } from 'react';
import { withStyles, Typography, Avatar } from '@material-ui/core';
import Will from '../images/will1.jpg';
import CardSpring from './CardSpring';

const styles = theme => ({
  root: {
    margin: '1rem',
    overflow: 'hidden',
    top: '25.3%',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      top: 70,
    },
  },
  content: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  me: {
    alignSelf: 'flex-end',
    margin: '3rem 0 3rem 3rem',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      margin: '1rem auto',
    },
  },
  pitch: {
    margin: '2rem 0 0 0',
    width: '40%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      margin: 'auto',
      width: '100%',
      padding: '1rem',
    },
  },
  pitchBody: {
    width: '80%',
    margin: 'auto',
    fontFamily: "'Montserrat', sans-serif",

  },
  subTitle: {
    marginBottom: '2rem',
    fontFamily: "'Montserrat', sans-serif",
  },
  avatar: {
    width: 300,
    height: 300,
    margin: '0 4rem 0 2rem',
    [theme.breakpoints.down('md')]: {
      margin: 'auto',
      width: 200,
      height: 200,
    },
    // float: 'right',
    // top: '-12rem',
    // right: '12%',
    // position: 'relative',
  },
});

class Jumbotron extends PureComponent {
  render() {
    const { classes, open } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h1">DEV // ENTHUSIAST</Typography>
        <div className={classes.content}>
          <CardSpring noDelay open={open}>
            <div className={classes.me}>
              <Avatar alt="Will Copeland" src={Will} className={classes.avatar} />
              <div className={classes.pitch}>
                <Typography className={classes.subTitle} variant="h5">
                 Developer // Mechanic // Tinkerer
                </Typography>
                <Typography className={classes.pitchBody} variant="body1">
                  I'm a versatile developer specializing in building frontend applications focusing
                  on user experience with advanced tools like React, GraphQL, NextJS, and Docker.
                </Typography>
              </div>
            </div>
          </CardSpring>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
