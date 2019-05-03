import React from 'react';
import { Spring, config } from 'react-spring';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = {
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    '&:hover': {
      cursor: 'default',
    },
  },
  subtitle: {
    marginTop: '1rem',
  },
};

const Intro = ({ classes, showDetail }) => (
  <Spring
    from={{ opacity: showDetail ? 1 : 0 }}
    to={{ opacity: showDetail ? 0 : 1 }}
    config={config.slow}
  >
    {props => (
      <div className={classes.root} style={props}>
        <Typography variant="h2">
            Hi, I'm Will
        </Typography>
        <Spring
          from={{ opacity: showDetail ? 1 : 0 }}
          to={{ opacity: showDetail ? 0 : 1 }}
          config={config.slow}
        >

          {props2 => (
            <Typography style={props2} className={classes.subtitle} variant="body1">
            I make ideas come to life with code.
            </Typography>
          )}

        </Spring>
      </div>
    )}
  </Spring>
);

Intro.propTypes = {
  showDetail: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Intro);
