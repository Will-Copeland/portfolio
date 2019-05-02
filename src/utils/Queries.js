import { graphlql } from 'gatsby';


const GET_WORK_SUMMARY_FROM_PROJECT_FILES = graphlql`
{
    allMarkdownRemark {
	  edges {
	    node {
	      id
        parent {
          id
        }
        frontmatter {
          title
          toolsUsed
          imgPath {
            id
          } 
          excerpt
        }
        excerpt
        html
	    }
	  }
	}
}
`;

export default GET_WORK_SUMMARY_FROM_PROJECT_FILES;
