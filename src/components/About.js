import React, { PureComponent } from 'react';
import {
  withStyles, Typography, Avatar, Divider,
} from '@material-ui/core';
import Will from '../images/will1.jpg';

const styles = ({ breakpoints }) => ({
  root: {
    textAlign: 'center',
    [breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
    },
  },
  avatar: {
    margin: 'auto',
    width: '120px',
    height: '120px',
    marginTop: '1.5rem',
    [breakpoints.up('md')]: {
      width: '220px',
      height: '220px',
      margin: 'auto',
    },
  },
  name: {
    margin: '1rem',
    textAlign: 'center',
  },
  subtitle: {
    margin: '1rem',
    lineHeight: '2.25rem',
    fontSize: '1.25rem',
  },
  textBody: {
    margin: '1.25rem',
    lineHeight: '2.25rem',
    fontSize: '1.25rem',
  },
});

class About extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Avatar
          alt="William Copeland"
          src={Will}
          className={classes.avatar}
        />
        <div>
          <Typography className={classes.name}>Will Copeland</Typography>
          <Divider />
          <Typography className={classes.subtitle}>Hello!</Typography>
          <Typography className={classes.textBody}>
           I am a frontend developer based in the SF bay area.
           I specialize in JavaScript, but have experience with a variety of
           languages and tools. If you have a project you’d like to discuss,
           please fill out the contact form and I’ll be in touch shortly!
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
