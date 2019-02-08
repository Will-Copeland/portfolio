import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { Spring } from 'react-spring';
import { withStyles, Typography } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import CustomList from './CustomList';

const styles = theme => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    // top: '15%'
  },
  list: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    backgroundColor: 'black',
  },
});

class Skills extends Component {
  render() {
    const { classes, open } = this.props;

    return (
      <StaticQuery
        query={graphql`
            query SkillsQuery {
                site {
                    siteMetadata {
                        skills {
                            proficient,
                            workingKnowledge
                        }
                    }
                }
            }`}

        render={data => (

          <div className={classes.root}>

            <Typography className={classes.title} onClick={() => this.handleState()} variant="h1">
                Skills
            </Typography>
            <div className={classes.list}>
              <Spring

                delay={!open ? 375 : 675}
                from={{ opacity: 0, bottom: 1000 }}
                to={{ opacity: open ? 1 : 0, bottom: open ? 0 : 1000 }}
              >
                {props => (
                  <div className={classes.list} style={props}>
                    <CustomList open={open} fadeRight title="Proficient" items={data.site.siteMetadata.skills.proficient} />
                    <CustomList open={open} title="Experience With" items={data.site.siteMetadata.skills.workingKnowledge} />
                  </div>
                )}
              </Spring>

            </div>
          </div>
        )}
      />
    );
  }
}

export default withStyles(styles)(Skills);
