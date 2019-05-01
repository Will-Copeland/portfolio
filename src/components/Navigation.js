import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = ({ breakpoints }) => ({
  root: {
    display: 'flex',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: 'fit-content',
      transform: 'rotate(-90deg)',
      float: 'left',
      display: 'inline'
    },
  },
  navOption: {
    margin: '1rem',
    fontSize: '1.5rem',
    [breakpoints.up('md')]: {
      fontSize: '3rem',
      display: 'inline-block',
      padding: '1rem',
      '&:hover': {
        cursor: 'pointer',
        borderBottom: '1px solid black',
      },
    },
  },
});

class Navigation extends PureComponent {
  render() {
    const { classes, handlePageSelect, currentPage } = this.props;

    const menuOptions = ['Work', 'Contact', 'About'];
    return (
      <div className={classes.root}>
        {menuOptions.map((option, index) => (
          <Typography
            key={option}
            style={
              index === currentPage ? { borderBottom: '4px solid black' } : null
            }
            variant="h3"
            className={classes.navOption}
            onClick={() => handlePageSelect(index)}
          >
            {option}
          </Typography>
        ))}
      </div>
    );
  }
}

Navigation.propTypes = {
  handlePageSelect: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default withStyles(styles)(Navigation);
