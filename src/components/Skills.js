import React, { PureComponent } from 'react';
import { Spring } from 'react-spring';
import { withStyles, Typography } from '@material-ui/core';
import { StaticQuery, graphql } from 'gatsby';
import CustomList from './CustomList';
import SkillsLogos from './SkillsLogos';
import CardSpring from './CardSpring';

const styles = theme => ({
  root: {
    position: 'relative',
    maxWidth: '100%',
    top: '-20px',
    margin: 'auto',
    zIndex: 120000,
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',

      top: 0,
      left: '5%',
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  logoList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {

    },
  },
  textList: {
    display: 'flex',
    margin: 'auto',
    width: '100%',
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
              <CardSpring open={open}>
                <div className={classes.logoList}>
                  <SkillsLogos open={open} />
                </div>

                <div className={classes.textList}>
                  <CustomList open={open} fadeRight title="Proficient" items={data.site.siteMetadata.skills.proficient} />
                  <CustomList open={open} title="Experience With" items={data.site.siteMetadata.skills.workingKnowledge} />
                </div>
              </CardSpring>

            </div>
          </div>
        )}
      />
    );
  }
}

export default withStyles(styles)(Skills);
