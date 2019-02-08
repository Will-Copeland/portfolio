import React from 'react';
import {
  withStyles, Card, CardMedia, CardContent, Typography,
} from '@material-ui/core';

const styles = {
  card: {
    margin: '1.2rem'
  },
  media: {
    width: '120px',
    height: '140px',
    textAlign: 'center',
    margin: '0.5rem',
    backgroundSize: 'contain',
  },
  content: {
    textAlign: 'center',
  },
};

function SkillIcon({ classes, trail, logo, title }) {
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
