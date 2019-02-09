import React from 'react';
import { Spring } from 'react-spring';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    color: 'white',
    zIndex: 1000,
    marginLeft: '5%',
    [theme.breakpoints.up('md')]: {

    },
  },
});

function Name({ classes, atTop }) {
  return (
    <Spring
      delay={atTop ? null : 650}
      reverse={!atTop}
      from={{ top: '60vh', fontSize: '5rem' }}
      to={atTop ? { top: '1px', fontSize: '2rem' } : { top: '60vh', fontSize: '5rem' }}
    >
      {props => (
        <h5 className={classes.root} style={props}>
          Will Copeland
        </h5>
      )
      }
    </Spring>
  );
}

Name.propTypes = {

};

export default withStyles(styles)(Name);
