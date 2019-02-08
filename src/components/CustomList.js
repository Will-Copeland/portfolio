import React from 'react';
import { Trail } from 'react-spring';
import {
  List, ListItem, Typography, withStyles, Divider,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%'
  },
  list: {
    paddingLeft: '1rem',
  },
  divider: {
    backgroundColor: 'white',
  },
});

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
          delay={1600}
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


export default withStyles(styles)(CustomList);
