import React, { PureComponent } from 'react';
import { withStyles, Typography, Avatar } from '@material-ui/core';


const styles = ({ breakpoints }) => ({
  root: {},
});

class About extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Avatar />
        <Typography>
            Sup fools. I smol-punch my keyboard in very sepcifc ways.
            If y'all want some of my smol-punches you can hit me up through the
            contact tab.
            See ya
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(About);
