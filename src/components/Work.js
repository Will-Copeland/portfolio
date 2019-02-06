import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = {

};

function Work({ classes, title }) {
  return (
    <div className={classes.root}>

            <Typography className={classes.title} onClick={() => this.handleState()} variant="h1">
                Skills
            </Typography>
            <div className={classes.list}>
              <Spring
                delay={!open ? 375 : 0}
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
  )
}

export default withStyles(styles)(Work);
