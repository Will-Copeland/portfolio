import React, { PureComponent } from 'react';
import {
  Card, CardHeader, CardMedia, CardContent, withStyles, Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';

const styles = {
  root: {
    margin: '2rem',
    width: '280px',
    height: '400px',
  },
  link: {
    textDecoration: 'none',
  },
  cardImg: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
    margin: 'auto',
    // backgroundImage: 'url(../images/project-images/grand-central.png)',
  },
  content: {
    width: '90%',
  },
};

class ProjectCard extends PureComponent {
  stopPropagation = () => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  render() {
    const {
      classes, project,
    } = this.props;
    return (
      <Link onClick={this.stopPropagation} className={classes.link} to={project.fields.slug}>
        <Card className={classes.root} key={project.frontmatter.title}>
          <CardHeader title={project.frontmatter.title} subheader={`${project.frontmatter.type} Project`} />
          <CardMedia className={classes.cardImg} image={project.frontmatter.imgPath[0].publicURL} />
          <CardContent className={classes.content}>
            <Typography variant="subtitle2">
              {project.excerpt}
            </Typography>

          </CardContent>
        </Card>
      </Link>
    );
  }
}

export default withStyles(styles)(ProjectCard);
