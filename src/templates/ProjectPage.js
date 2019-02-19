import React from 'react';
import { graphql } from 'gatsby';
import classnames from 'classnames';
import { withStyles, Typography, Chip } from '@material-ui/core';
import Layout from '../components/layout';

const styles = theme => ({
  root: {
    paddingTop: '7rem',
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-evenly',
    },
  },
  container: {
    overflowX: 'scroll',
    // padding: '0 5rem 0 5rem',
    [theme.breakpoints.up('md')]: {
      width: '100%',
      overflow: 'hidden',
    },
  },
  flex: {
    display: 'flex',
    // overflow: 'hidden',
    width: 'fit-content',
    maxWidth: '300%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('md')]: {
      height: '100%',
      width: '90%',
      margin: '1rem',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      backgroundColor: 'inherit',
    },
  },
  singleImg: {
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  multipleImg: {
    // width: '200px',
    [theme.breakpoints.up('md')]: {
      width: '25%',
    },
  },
  imgContainer: {
    display: 'flex',
    height: '10rem',
    margin: '0 0.5rem 0 0.5rem',
    backgroundSize: 'contain',
    [theme.breakpoints.up('md')]: {
      height: 'fit-content',
      marginRight: '2rem',
    },
  },
  img: {
    maxHeight: '100%',
    [theme.breakpoints.up('md')]: {
    },
  },
  externalLink: {
    margin: '1rem',
    color: 'white',
  },
  textArea: {
    color: 'white',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '44.3%',
    margin: '1rem',
    height: 'fit-content',
    padding: '2rem',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  title: {
    marginBottom: '1rem',
  },
  body: {
    margin: 0,
    padding: 0,
  },
  chip: {
    margin: '1rem',
  },
});

const ProjectPage = ({ data: { markdownRemark: post }, classes }) => (
  <Layout notOnIndex>
    <div className={classes.root}>

      <div className={classes.container}>
        <div className={classes.flex}>
          {post.frontmatter.imgPath.map(img => (
            <div className={classnames(classes.imgContainer, post.frontmatter.imgPath.length > 1 ? classes.multipleImg : classes.singleImg)}>
              <img
                className={classes.img}
                src={img.publicURL}
                alt={post.frontmatter.title}
                key={img.publicURL}
              />
            </div>
          ))}
        </div>
      </div>


      <div className={classes.textArea}>
        <Typography className={classes.title} variant="h2">{post.frontmatter.title}</Typography>
        {post.frontmatter.externalLink.length > 0
          ? (
            <Typography className={classes.externalLink} variant="h4">
              <a className={classes.externalLink} target="_blank" rel="noopener noreferrer" href={post.frontmatter.externalLink}>
            Project Site
              </a>
            </Typography>
          )
          : null}
        {post.frontmatter.repo.length > 0
          ? (
            <Typography className={classes.externalLink} variant="h4">
              <a className={classes.externalLink} target="_blank" rel="noopener noreferrer" href={post.frontmatter.repo}>
            GitHub Repo
              </a>
            </Typography>
          )
          : (
            <Typography className={classes.externalLink} variant="h4">
              <s>GitHub Repo </s>
              <br />
              NDA restricted :(
            </Typography>
          )
          }
        <Typography variant="h6">Tools I used for this project:</Typography>

        {post.frontmatter.toolsUsed.map(tool => <Chip className={classes.chip} label={tool} />)}
        <div className={classes.body} dangerouslySetInnerHTML={{ __html: post.html }} />


      </div>

    </div>
  </Layout>
);
export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
          type
          repo
          toolsUsed
          externalLink
          imgPath {
            publicURL
          }
        }
      }
    }
  `;

export default withStyles(styles)(ProjectPage);
