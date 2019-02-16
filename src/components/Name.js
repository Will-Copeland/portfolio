import React from 'react';
import { Spring } from 'react-spring';
import { Typography, withStyles, Hidden } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'absolute',
    color: 'white',
    zIndex: 1000,
    marginLeft: '5%',
    margin: '0.75rem 4.25rem 0 0',
    [theme.breakpoints.up('md')]: {

    },
  
  },
  mobileName: {
    zIndex: 6000,
    position: 'absolute',
    borderBottom: '1px solid white',
    width: 'fit-content',
    margin: '1.25rem 4.25rem 0 1rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0.5rem 3rem 0 1rem',
      right: 0,
    },
  },
});

function Name({ classes, atTop }) {
  return (
    <React.Fragment>

      <Hidden mdDown>
        <Spring
          delay={atTop ? null : 650}
          reverse={!atTop}
          from={{ top: '60vh', fontSize: '5rem' }}
          to={atTop ? { top: '1px', fontSize: '2rem' } : { top: '60vh', fontSize: '5rem' }}
        >
          {props => (
            <Typography variant="h5" className={classes.root} style={props}>
          Will Copeland
            </Typography>
          )
      }
        </Spring>

      </Hidden>
      <Hidden lgUp>
        <div className={classes.mobileName}>
          <Typography variant="h5">Will Copeland</Typography>

        </div>


      </Hidden>
    </React.Fragment>
  );
}

Name.propTypes = {

};

export default withStyles(styles)(Name);
