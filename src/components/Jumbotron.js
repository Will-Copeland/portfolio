import React from 'react';
import { withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    height: '43.3vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  intro: {
    margin: '1.5rem 1.5rem 3rem 1.5rem'
  }
});

const Jumbotron = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.intro}>
      <Typography variant="h5">
            Frontend Software Developer
      </Typography>
      <Typography variant="subtitle1">
         I am a frontend software engineer based in the SF Bay area.
          This is my portfolio and blog which details my skills and experience.
      </Typography>
    </div>

  </div>
);


export default withStyles(styles)(Jumbotron);
