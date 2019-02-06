import React from 'react';
import PropTypes from 'prop-types';
import { Keyframes, Trail } from 'react-spring';
import {
  List, ListItem, Typography, withStyles, Divider,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    // border: '1px solid white'
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  list: {
    paddingLeft: '1rem',
  },
  divider: {
    backgroundColor: 'white',
  },
});


// const Content = Keyframes.Trail({
//   show: { left: 0, delay: 1000 },

//   hide: { left: 1000 },
// });

const CustomList = ({
  items, classes, title, fadeRight,
  open,
}) => (
  <div className={classes.root}>

    <List>
      <ListItem>
        <Typography variant="h5">
          {title}
          <Divider className={classes.divider} variant="middle" />

        </Typography>

      </ListItem>
      <List className={classes.list}>
        <Trail
          items={items}
          delay={300}
          reverse={!open}
          from={fadeRight ? { right: 1000 } : { left: 1000 }}
          to={fadeRight ? { right: open ? 0 : 1000 } : { left: open ? 0 : 1000 }}
        >
          {item => props => (
            <ListItem style={props} className={classes.item}>
              <Typography variant="h6">
                {item}
              </Typography>
            </ListItem>
          )}

        </Trail>
      </List>
    </List>

  </div>
);

CustomList.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  items: PropTypes.arrayOf.isRequired,

};

export default withStyles(styles)(CustomList);
