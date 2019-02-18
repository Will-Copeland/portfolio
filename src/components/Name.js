import React from 'react';
import { Spring } from 'react-spring';
import { Link } from 'gatsby';
import {
  Typography, withStyles, Hidden,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    // fontSize: '0.2rem',
    position: 'absolute',
    color: 'white',
    zIndex: 1000,
    marginLeft: '5%',
    margin: '0.75rem 4.25rem 0 0',
    '@media (max-width: 1732px)': {
      width: '33%'
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

function Name({ classes, atTop, notOnIndex }) {
  return (
    <React.Fragment>

      <Hidden mdDown>
        <Link
          to="/"
        >
          <Spring
        // Disables animation completely if not on Index
            immediate={!!notOnIndex}
            delay={atTop ? null : 650}
            reverse={!atTop}
            from={{ top: '50vh', fontSize: '5rem' }}
            to={atTop ? { top: '1px', fontSize: '2rem' } : { top: '50vh', fontSize: '5rem' }}
          >
            {props => (

              <Typography
                style={props}
                variant="h5"
                className={classes.root}
              >
          Will Copeland
              </Typography>

            )
      }
          </Spring>
        </Link>
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
