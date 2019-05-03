import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Navigation from './Navigation';
import PageContainer from './PageContainer';

const styles = ({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      overflowY: 'hidden',
      height: '100vh',
      margin: 'auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
  pageContainer: {
    [breakpoints.up('lg')]: {
      width: '50%',
    },
  },
});

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 0,
    };
  }

  handlePageSelect = (pageIndex) => {
    this.setState({ currentPage: pageIndex });
  };

  render() {
    const { classes } = this.props;
    const { currentPage } = this.state;
    return (
      <div className={classes.root}>
        <Navigation
          className={classes.nav}
          currentPage={currentPage}
          handlePageSelect={this.handlePageSelect}
        />

        <div className={classes.pageContainer}>
          <PageContainer currentPage={currentPage} />
        </div>
      </div>

    );
  }
}

export default withStyles(styles)(Detail);
