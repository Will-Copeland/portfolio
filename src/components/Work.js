import React, { PureComponent } from 'react';
import { withStyles, Typography, GridList } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import CardSpring from './CardSpring';
import ProjectCard from './ProjectCard';


const styles = {
  root: {
    // display: 'inline-block',
    overflow: 'hidden',
    width: '100%',
    height: 'fit-content',
    // marginTop: '2rem'
  },
  title: {
    textAlign: 'right',
    paddingRight: '6rem',
    overflow: 'hidden'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around'
  }
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
          type
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

            <Typography className={classes.title} variant="h1">Work</Typography>
            <CardSpring openDelay open={open}>
              <div className={classes.content}>
                {data.allMarkdownRemark.edges.map(edge => <ProjectCard key={edge.node.id} project={edge.node} />)}

              </div>
            </CardSpring>
          </div>
        )}
      />

    );
  }
}

export default withStyles(styles)(Work);
