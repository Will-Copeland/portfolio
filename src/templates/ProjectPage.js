import React from 'react';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core';
import Layout from '../components/layout';

const styles = theme => ({

});

// const post = markdownRemark;
const ProjectPage = ({ data: { markdownRemark: post } }) => (
  <Layout notOnIndex={true}>
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {post.frontmatter.toolsUsed.map(tool => <p>{tool}</p>)}
    </div>
  </Layout>
);
export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
          toolsUsed
        }
      }
    }
  `;

export default withStyles(styles)(ProjectPage);
