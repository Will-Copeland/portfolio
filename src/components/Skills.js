import React, { PureComponent } from 'react';
import classnames from 'classnames';
import { Spring } from 'react-spring';
import { withStyles, Typography } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import CustomList from './CustomList';
import SkillsLogos from './SkillsLogos';

const styles = theme => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    // top: '15%'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  secondryList: {
    display: 'flex',
  },
  textList: {
    margin: 'auto',
    width: '100%',
  },
  title: {
    backgroundColor: 'black',
  },
});

class Skills extends PureComponent {
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

            <Typography className={classes.title} variant="h1">
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
                    <div className={classes.secondryList}>
                      <SkillsLogos open={open} />
                    </div>

                    <div className={classnames(classes.secondryList, classes.textList)}>
                      <CustomList open={open} fadeRight title="Proficient" items={data.site.siteMetadata.skills.proficient} />
                      <CustomList open={open} title="Experience With" items={data.site.siteMetadata.skills.workingKnowledge} />

                    </div>

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
