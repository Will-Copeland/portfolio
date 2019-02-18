import React, { PureComponent } from 'react';
import {
  Card, CardHeader, CardMedia, CardContent, withStyles, Typography, Hidden,
} from '@material-ui/core';
import { Link } from 'gatsby';

const styles = theme => ({
  root: {
    margin: '2rem',
    width: '100%',
    height: '25rem',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      height: '90px',
      margin: '1rem',
    },
  },
  header: {
    color: 'white',
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
    padding: '0.5rem',
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
      <Card style={trail} className={classes.root} key={project.frontmatter.title}>
        <Link  onClick={this.stopPropagation} className={classes.link} to={project.fields.slug}>

          <CardHeader className={classes.header} title={project.frontmatter.title} subheader={`${project.frontmatter.type} Project`} />


          <Hidden mdDown>
            <CardMedia className={classes.cardImg} image={project.frontmatter.imgPath[0].publicURL} />


            <CardContent className={classes.content}>
              <Typography variant="subtitle2">
                {project.excerpt}
              </Typography>

            </CardContent>
          </Hidden>
        </Link>
      </Card>
    );
  }
}

export default withStyles(styles)(ProjectCard);
