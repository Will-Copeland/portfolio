import React, { PureComponent } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import { Trail } from 'react-spring';
import CardSpring from './CardSpring';
import ProjectCard from './ProjectCard';


const styles = theme => ({
  root: {
    position: 'relative',
    height: '100%',
    margin: '1rem',
    width: '90%',
    top: 75,
    maxWidth: '100%',
    overflowY: 'auto',
    [theme.breakpoints.up('md')]: {
      // display: 'inline-block',
      // right: '5%',
      // float: 'right',
      top: 150,

    },
  },
  title: {
    // textAlign: 'right',
    overflow: 'hidden',
  },
  content: {
    overflow: 'hidden',
  },
  cards: {
    display: 'flex',
    // margin: '2rem',
    // justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      // width: '7rem',
      margin: 0,
      // height: '10rem',
      flexDirection: 'column',
      // overflow: 'scroll',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      // display: 'grid',
      alignItems: 'center',
      height: '100%',
      width: '100%'
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
                  <Trail
                    delay={!open ? 800 : 700}
                    items={data.allMarkdownRemark.edges}
                    reverse={!open}
                    keys={edge => edge.node.id}
                    from={{ transform: 'translate3d(0, 4000px,0)' }}
                    to={open ? { transform: 'translate3d(0, 0,0)' } : { transform: 'translate3d(0,4000px,0)' }}
                  >
                    {item => props => <ProjectCard trail={props} project={item.node} />}
                  </Trail>
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
