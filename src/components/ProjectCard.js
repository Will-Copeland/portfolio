import React, { PureComponent } from 'react';
import { GridListTile, GridListTileBar, withStyles } from '@material-ui/core';
import { Link } from 'gatsby';

const styles = {
  root: {

  },
  cardImg: {
    width: '150px',
    height: '200px',
    backgroundImage: 'url(../images/project-images/grand-central.png)',
  },
};

class ProjectCard extends PureComponent {
  render() {
    const {
      classes, project,
    } = this.props;
    return (
      <Link to={project.fields.slug}>
        <GridListTile className={classes.root} key={project.frontmatter.title}>
          <img className={classes.cardImg} src={project.frontmatter.imgPath[0].publicURL} alt={project.frontmatter.title} />
          <GridListTileBar
            className={classes.tileBar}
            title={project.frontmatter.title}
            subtitle={project.frontmatter.excerpt}
          />
        </GridListTile>
      </Link>
    );
  }
}

export default withStyles(styles)(ProjectCard);
