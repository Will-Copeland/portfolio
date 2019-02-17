import React, { PureComponent } from 'react';
import {
  Card, CardHeader, CardMedia, CardContent, withStyles, Typography, Hidden,
} from '@material-ui/core';
import { Link } from 'gatsby';

const styles = theme => ({
  root: {
    margin: '2rem',
    width: '15rem',
    height: '25rem',
    [theme.breakpoints.down('md')]: {
      width: '8rem',
      height: '11rem',
      margin: '1rem',
    },
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
    height: 'fit-content',
    padding: '0.5rem'
  },
});

class ProjectCard extends PureComponent {
  stopPropagation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  render() {
    const {
      classes, project, trail,
    } = this.props;
    return (
      <Link style={trail} onClick={this.stopPropagation} className={classes.link} to={project.fields.slug}>
        <Card className={classes.root} key={project.frontmatter.title}>
          <CardHeader title={project.frontmatter.title} subheader={`${project.frontmatter.type} Project`} />
          <Hidden mdDown>
            <CardMedia className={classes.cardImg} image={project.frontmatter.imgPath[0].publicURL} />

          </Hidden>
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
