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
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },
  flex: {
    display: 'flex',
    height: '14rem',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('md')]: {
      height: '100%',
      margin: '1rem',
      backgroundColor: 'inherit',
    },
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  externalLink: {
    margin: '1rem',
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
      <div className={classes.flex}>
        <img
          className={classes.img}
          src={post.frontmatter.imgPath[0].publicURL}
          alt={post.frontmatter.title}
        />
      </div>

      <div className={classes.textArea}>
        <Typography className={classes.title} variant="h2">{post.frontmatter.title}</Typography>
        <Typography className={classes.externalLink} variant="h4">
          {post.frontmatter.externalLink.length > 0
            ? (
              <a target="_blank" rel="noopener noreferrer" href={post.frontmatter.externalLink}>
            Project Site
              </a>
            )
            : null}
        </Typography>

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
