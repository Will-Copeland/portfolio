import React, { PureComponent } from 'react';
import { withStyles, Typography, GridList } from '@material-ui/core';
import CardSpring from './CardSpring';


const styles = {
  root: {
    display: 'static',
    overflow: 'hidden'
  },
  test: {
    color: 'white',
  },
};

class Work extends PureComponent {
  render() {
    const { open, classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h1">Work</Typography>
        <CardSpring openDelay open={open}>
          <GridList cellHeight={80} className={classes.gridList}>
            
          
          </GridList>
        </CardSpring>
      </div>
    );
  }
}

export default withStyles(styles)(Work);
