import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  test: {
    backgroundColor: theme.palette.primary.main,
  },
});

class Jumbotron extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.test}>This is a test</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Jumbotron);
