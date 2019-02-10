import React, { PureComponent } from 'react';
import { Spring } from 'react-spring';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {

    },
  },
});

class CardSpring extends PureComponent {
  render() {
    const { children, classes, open } = this.props;
    return (
      <Spring
        delay={!open ? 375 : 675}
        from={{ opacity: 0, bottom: 1000 }}
        to={{ opacity: open ? 1 : 0, bottom: open ? 0 : 1000 }}
      >
        {props => (
          <div style={props} className={classes.root}>
            {children}
          </div>
        )}


      </Spring>
    );
  }
}

export default withStyles(styles)(CardSpring);
