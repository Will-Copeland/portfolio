import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';
import { Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    position: 'absolute',
    color: 'white',
    maxWidth: '75%',
    display: 'flex',
    zIndex: 1000
  },
};

function Name({ classes, atTop }) {
  return (
    <Spring
      // delay={1000}
      reverse={!atTop}
      from={{ top: '70%', fontSize: '5rem' }}
      to={atTop ? { top: '1px', fontSize: '2rem' } : { top: '70%', fontSize: '5rem' }}
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
