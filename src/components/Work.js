import React, { PureComponent } from 'react';
import { withStyles, Typography, GridList } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import CardSpring from './CardSpring';
import ProjectCard from './ProjectCard';


const styles = {
  root: {
    display: 'static',
    overflow: 'hidden',
  },
  gridList: {

  },
};

class Work extends PureComponent {
  render() {
    const { open, classes } = this.props;
    return (
      <StaticQuery
        query={graphql`
              query WorkQuery {
                allMarkdownRemark {
	  edges {
	    node {
        fields {
          slug
        }
	      id
        fileAbsolutePath
        frontmatter {
          title
          toolsUsed
          imgPath {
            publicURL
          }
          excerpt
        }
        excerpt
        html
        
	    }
	  }
	}
}`}
        render={data => (


          <div className={classes.root}>

            <Typography variant="h1">Work</Typography>
            <CardSpring openDelay open={open}>
              <GridList cellHeight={180} className={classes.gridList}>
                {data.allMarkdownRemark.edges.map(edge => <ProjectCard project={edge.node} />)}
              </GridList>
            </CardSpring>
          </div>
        )}
      />

    );
  }
}

export default withStyles(styles)(Work);
