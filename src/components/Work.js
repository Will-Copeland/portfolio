import React, { PureComponent } from 'react';
import { withStyles, GridList } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import { Trail } from 'react-spring';
import WorkItem from './WorkItem';

const styles = ({ breakpoints }) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    margin: 'auto',
    [breakpoints.up('lg')]: {
      height: 'fit-content',
      maxHeight: '100%',
      width: '130%',
    },

  },
  gridList: {
    maxWidth: '100%',
    justifyContent: 'center',
    [breakpoints.up('md')]: {
      justifyContent: 'left',

    },
  },
});

class Work extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={240} className={classes.gridList}>
          <StaticQuery
            query={graphql`
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
                      externalLink
                      imgPath {
                        id
                        publicURL
                      } 
                      excerpt
                    }
                    }
                  }
                }
            }
            `}
            render={data => (
              <Trail
                items={data.allMarkdownRemark.edges}
                keys={edge => edge.node.id}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              >
                {item => props => <WorkItem trail={props} workItem={item} /> }
              </Trail>
            )
            }

          />
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Work);
