import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = {
  root: {
    // writingMode: 'vertical-rl',
    display: 'flex',
    transform: 'rotate(-90deg)',
  },
  navOption: {
    padding: '1rem',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: '2px solid black',
    },
  },
};

class VerticalNav extends Component {
  static propTypes = {
    prop: PropTypes,
  }

  render() {
    const { classes, handlePageSelect } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h3" className={classes.navOption} onClick={() => handlePageSelect(0)}>
            Work
        </Typography>
        <Typography variant="h3" className={classes.navOption} onClick={() => handlePageSelect(1)}>
            Contact
        </Typography>
        <Typography variant="h3" className={classes.navOption} onClick={() => handlePageSelect(2)}>
            About
        </Typography>
      </div>
    );
  }
}


export default withStyles(styles)(VerticalNav);
