import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Spring } from 'react-spring';
import VerticalNav from './VerticalNav';

const styles = {
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Detail extends Component {
  static propTypes = {
    prop: PropTypes,
  }

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
        <VerticalNav currentPage={currentPage} handlePageSelect={this.handlePageSelect} />
        {/* <SelectedPage currentPage={currentPage} /> */}
      </div>

    );
  }
}

export default withStyles(styles)(Detail);
