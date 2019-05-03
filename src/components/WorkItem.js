import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles, GridListTile, GridListTileBar, Typography, Divider,
} from '@material-ui/core';

const styles = ({ breakpoints }) => ({
  root: {
    margin: '1rem',
  },
  title: {
    textAlign: 'center',
  },
  image: {
    width: '82vw',
    [breakpoints.up('md')]: {
      width: '160px',
    },
    [breakpoints.up('lg')]: {
      width: '220px',
    },
    [breakpoints.up('xl')]: {
      width: '350px',
      height: '360px',
    },
  },
  link: {
    textDecoration: 'none'
  }
});

class WorkItem extends PureComponent {
  render() {
    const {
      trail,
      workItem:
      {
        node: {
          frontmatter:
        {
          title, excerpt, imgPath, externalLink,
        },
        },
      },
      classes,
    } = this.props;

    return (
      <div>
        <a className={classes.link} target="_blank" rel="noopener noreferrer" href={externalLink}>
          <Typography className={classes.title}>{title}</Typography>
          <Divider inset />
          <GridListTile style={{ trail }} className={classes.root}>
            <img
              alt={title}
              className={classes.image}
              src={imgPath[0].publicURL}
            />
            <GridListTileBar
              title={excerpt}
              titlePosition="top"
            />
          </GridListTile>
        </a>
      </div>

    );
  }
}

WorkItem.propTypes = {
  trail: PropTypes.shape.isRequired,
  workItem: PropTypes.shape.isRequired,
};

export default withStyles(styles)(WorkItem);
