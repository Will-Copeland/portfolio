import React from 'react';
import {
  withStyles, Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';

const styles = theme => ({
  card: {
    margin: '0.5rem',
    width: '60px',
    height: '70px',
    [theme.breakpoints.up('md')]: {
      width: '200px',
      height: 'auto'
    },
  },
  media: {
    width: '50px',
    height: '60px',
    margin: '0.25rem auto',
    textAlign: 'center',
    backgroundSize: 'contain',
    [theme.breakpoints.up('md')]: {
      width: '120px',
      height: '140px',
    },
  },
  content: {
    textAlign: 'center',
  },

});

function SkillIcon({
  classes, trail, logo, title,
}) {
  return (
    <div style={trail}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={logo}
        />
        <CardContent className={classes.content}>
          <Typography variant="overline">{title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SkillIcon);
