import React from 'react';
import { graphql } from 'gatsby';
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
      justifyContent: 'flex-end',
    },
  },
  container: {
    overflowX: 'scroll',
  },
  flex: {
    display: 'flex',
    // flexWrap: 'wrap',
    // height: '14rem',
    overflow: 'scroll',
    maxWidth: '300%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('md')]: {
      height: '100%',
      width: 'fit-content',
      margin: '1rem',
      flexDirection: 'column',
      backgroundColor: 'inherit',
    },
  },
  imgContainer: {
    // display: 'flex',
    width: '200px',
    height: '10%',
    margin: '0 0.5rem 0 0.5rem',
    backgroundSize: 'contain',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
    [theme.breakpoints.up('md')]: {
      margin: '1rem',


    },
  },
  externalLink: {
    margin: '1rem',
    color: 'white',
    // textDecoration: 'none',
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
            <div className={classes.imgContainer}>
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
        <div className={classes.body} dangerouslySetInnerHTML={{ __html: post.html }} />

        <Typography variant="h6">Tools I used for this project:</Typography>

        {post.frontmatter.toolsUsed.map(tool => <Chip className={classes.chip} label={tool} />)}
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
