import React, { PureComponent } from 'react';
import { withStyles, Typography, GridList } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import CardSpring from './CardSpring';
import ProjectCard from './ProjectCard';


const styles = theme => ({
  root: {
    position: 'relative',
    height: '100%',
    top: 150,
    margin: '1rem',

    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      right: '5%',
      float: 'right',

    },
  },
  title: {
    textAlign: 'right',
    overflow: 'hidden',
  },
  content: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    height: '100%',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      // width: '7rem',
      // height: '10rem',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      // display: 'grid', 
      alignItems: 'center',
      height: '100%',
    },
  },
});

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
            <div className={classes.content}>
              <CardSpring openDelay open={open}>
                <div className={classes.cards}>
                  {data.allMarkdownRemark.edges.map(edge => <ProjectCard key={edge.node.id} project={edge.node} />)}
                </div>
              </CardSpring>
            </div>
          </div>
        )}
      />

    );
  }
}

export default withStyles(styles)(Work);
